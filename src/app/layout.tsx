import type { Metadata } from "next";
import { Scope_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const scopeOne = Scope_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vaibhav Kumar Singh",
  description:
    "I am a software engineer who loves to build things. I am passionate about web technologies and building products that help people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          scopeOne.className,
          "h-screen overflow-auto custom-scrollbar flex flex-col bg-gradient-to-l from-blue-900 to-gray-900 snap-mandatory snap-y items-center"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
