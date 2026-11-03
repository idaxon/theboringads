import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theboringads.com"),
  title: "THE BORING ADS BY DAKSH — Creative Direction & Concepts Portfolio",
  description:
    "Selected commercial concepts, spec ads, and creative copywriting portfolio of The Boring Ads (By Daksh). No 80-page decks. No agency bloat. Just the creative concepts people actually look at, laugh at, and remember.",
  icons: {
    icon: "/boringlogo.png",
    apple: "/boringlogo.png",
  },
  openGraph: {
    title: "THE BORING ADS BY DAKSH — Creative Direction & Concepts Portfolio",
    description: "The creative direction & ad concepts portfolio of Daksh. We make boring ads unboring.",
    images: ["/boringlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#F7F6F2] text-[#0A0A0A] font-inter antialiased selection:bg-[#0A0A0A] selection:text-[#DFFF00]">
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
