import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Theme Toggle Next Themes",
  description:
    "A Next.js app with theme toggle functionality using next-themes",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
