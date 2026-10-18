import type { Metadata } from "next";

// default font imports
import { Geist, Geist_Mono, Badeen_Display } from "next/font/google";

// css import
import "@/src/styles/globals.css";

const badeen_display = Badeen_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-badeen-display",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lynko | CREATE YOUR TREE",
  description: "developed by 1rody",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${badeen_display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}