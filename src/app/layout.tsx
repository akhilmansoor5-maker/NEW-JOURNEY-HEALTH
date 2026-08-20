import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyConvertBar } from "@/components/layout/StickyConvertBar";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.documentTitle,
    template: "%s",
  },
  description: site.tagline,
  metadataBase: new URL("https://newjourneyhealth.com"),
  icons: {
    icon: media.favicon,
    apple: media.apple,
  },
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-white pb-[5.25rem] font-sans text-forest md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2">
          Skip to content
        </a>
        <OrganizationJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyConvertBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
