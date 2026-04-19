import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { COPY } from "@/lib/copy";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etherbonds.com"),
  title: COPY.meta.title,
  description: COPY.meta.description,
  openGraph: {
    title: COPY.meta.title,
    description: COPY.meta.description,
    url: "https://etherbonds.com",
    siteName: COPY.brand.wordmark,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.meta.title,
    description: COPY.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-parchment-50 text-charcoal-900 font-serif text-base leading-[1.7] tracking-[-0.01em]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-parchment-50 focus:px-4 focus:py-2 focus:text-charcoal-900 focus:ring-1 focus:ring-sage-500 focus:ring-offset-2 focus:ring-offset-parchment-50"
        >
          {COPY.aria.skipToContent}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
