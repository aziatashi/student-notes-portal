import type { Metadata } from "next";
import "./globals.css";
import SessionProviderWrapper from "@/components/SessionProvider";
import { FirebaseAuthProvider } from "@/components/FirebaseAuthProvider";

export const metadata: Metadata = {
  title: "Notes-Aid",
  description: "A simple app to organize your academic notes",
  applicationName: "Notes-Aid",
  keywords: [
    "notes",
    "notes aid",
    "notes aid app",
    "notes aid website",
    "notes aid web app",
    "notes aid webapp",
    "notes aid notes",
    "notes aid academic notes",
    "academic notes",
    "academic notes app",
    "academic notes website",
    "academic notes web app",
    "academic notes webapp",
    "notes-aid",
    "notes-aid app",
    "notes-aid website",
    "notes-aid web app",
    "notes-aid webapp",
    "notes-aid notes",
    "notes-aid academic notes",
    "inikunjrathi",
     "aziatashi",
    "nikunj",
      'kjsce',
    "kjsce notes",
    "kjsce notes app",
    "kjsce notes website",
    "kjsce notes web app",
    "kjsce notes webapp",
  ],
  authors: [
    { name: "inikunjrathi", url: "https://github.com/inikunjrathi" },
    { name: "aziatashi", url: "https://github.com/aziatashi" },
  ],
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),

  openGraph: {
    type: "website",
    title: "Notes-Aid",
    description: "A simple app to organize your academic notes",
    siteName: "Notes-Aid",
    images: [
      {
        url: "/favicon_io/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Notes-Aid preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Notes-Aid",
    description: "A simple app to organize your academic notes",
    images: ["/favicon_io/android-chrome-512x512.png"],
  },

  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/favicon.ico",
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FirebaseAuthProvider>
          <SessionProviderWrapper>{children}</SessionProviderWrapper>
        </FirebaseAuthProvider>
      </body>
    </html>
  );
}
