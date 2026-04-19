import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { COPY } from "@/lib/copy";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

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
    <html
      lang="en-GB"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory-50 text-navy-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory-50 focus:px-4 focus:py-2 focus:text-navy-900 focus:ring-1 focus:ring-tiffany-500 focus:ring-offset-2 focus:ring-offset-ivory-50"
        >
          {COPY.aria.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
