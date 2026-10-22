import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 4000;
const MAX_PDF_CONTEXT_CHARS = 200_000;

const openai = new OpenAI({
    baseURL: 'https://go.fastrouter.ai/api/v1',
    apiKey: process.env.FASTROUTER_API_KEY || '',
});

export async function POST(request: NextRequest) {
    try {
        // Paid LLM proxy: signed-in users only
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Please sign in to use chat' }, { status: 401 });
        }

        const { messages: rawMessages, pdfContext: rawPdfContext } = await request.json();

        if (!rawMessages || !Array.isArray(rawMessages) || rawMessages.length > MAX_MESSAGES) {
            return NextResponse.json(
                { error: 'Invalid messages format' },
                { status: 400 }
            );
        }

        // Only user/assistant turns; clients must not inject system prompts
        const messages = rawMessages
            .filter((m) => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string')
            .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
        const pdfContext = typeof rawPdfContext === 'string' ? rawPdfContext.slice(0, MAX_PDF_CONTEXT_CHARS) : '';

        // Prepare context with PDF content
        const systemMessage = pdfContext
            ? {
                  role: 'system' as const,
                  content: `You are an AI assistant helping students study from their uploaded PDF documents. 
                  
Here is the content from the uploaded PDFs:
${pdfContext}

When answering questions:
1. Base your answers strictly on the provided PDF content
2. Be concise and clear in your explanations
3. Always cite the page number(s) where the information was found (e.g., "According to page 5...")
4. If the answer is not in the provided content, clearly state that
5. Focus on helping students understand the material

Keep responses educational and study-focused.`,
              }
            : {
                  role: 'system' as const,
                  content: 'You are a helpful educational AI assistant.',
              };

        const completion = await openai.chat.completions.create({
            model: 'anthropic/claude-sonnet-4-20250514',
            messages: [systemMessage, ...messages],
            temperature: 0.7,
            max_tokens: 1000,
        });

        return NextResponse.json({
            message: completion.choices[0].message,
            usage: completion.usage,
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process chat request', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
