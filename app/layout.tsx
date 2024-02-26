import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "./(main)/_components/navbar";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Bot Dashboard",
  description: "Created by SLM Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-white dark:bg-[#1d1d1d]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-bot-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
