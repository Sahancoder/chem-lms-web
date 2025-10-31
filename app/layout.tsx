import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@/components/SignIn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chem LMS - Chemistry Learning Hub",
  description: "Chemistry learning hub with curated videos, resources, notes, and community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cosmic min-h-screen`}
      >
        <header className="sticky top-0 z-40 glass rounded-none border-0 border-b border-line/60">
          <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
            <Link href="/" className="font-bold tracking-wide text-text text-xl flex items-center gap-3">
              <Image 
                src="/website Logo.png" 
                alt="Chem LMS" 
                width={72} 
                height={72}
                className="object-contain"
              />
              <span className="text-text text-2xl">
                Chem LMS
              </span>
            </Link>
            <div className="flex items-center gap-6 text-mute text-sm font-medium">
              <Link href="/dashboard" className="hover:text-accent transition-colors">
                Dashboard
              </Link>
              <Link href="/videos" className="hover:text-accent transition-colors">
                Videos
              </Link>
              <Link href="/resources" className="hover:text-accent transition-colors">
                Resources
              </Link>
              <Link href="/notes" className="hover:text-accent transition-colors">
                Notes
              </Link>
              <Link href="/community" className="hover:text-accent transition-colors">
                Community
              </Link>
              <SignIn />
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-5 py-8">{children}</main>
      </body>
    </html>
  );
}
