import { NextResponse } from "next/server";
import { fetchFromRepo } from "@/lib/github";

interface GitHubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export async function GET() {
  try {
    const contributors = await fetchFromRepo<GitHubContributor[]>("contributors");
    return NextResponse.json(contributors);
  } catch (error) {
    console.error("Error fetching GitHub contributors:", error);
    return NextResponse.json(
      { error: "Failed to fetch contributors" },
      { status: 500 }
    );
  }
}
