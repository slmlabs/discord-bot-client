import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "./(main)/_components/navbar";
import Waves from "@/components/bg-wave";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Bot Dashboard",
  description: "Created by SLM Labs",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-[#EEEEEE] dark:bg-[#222831]")}>
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
