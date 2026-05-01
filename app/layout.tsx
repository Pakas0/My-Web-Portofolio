import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Bagaskara | Fullstack Developer",
  description: "Personal portfolio of Bagaskara, a Fullstack Developer and student at Politeknik Negeri Semarang.",
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
          inter.variable,
          playfair.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent-blue selection:text-white"
        )}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
