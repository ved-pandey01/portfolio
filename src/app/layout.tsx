import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Newsreader, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CommandMenu } from "@/components/CommandMenu";
import { Footer } from "@/components/Footer";
import { MobileTabBar } from "@/components/MobileTabBar";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { profile, seo, siteUrl } from "@/content/site";
import { palette, paletteCss } from "@/theme/palette";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const serif = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-face", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: `%s | ${profile.name}` },
  description: seo.description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: profile.name,
    title: seo.title,
    description: seo.shareDescription,
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.shareDescription },
};

export const viewport: Viewport = {
  themeColor: palette.bg,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${body.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <style id="palette" dangerouslySetInnerHTML={{ __html: paletteCss }} />
      </head>
      <body className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-button focus:px-4 focus:py-2 focus:text-button-text"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <CommandMenu />
          <MobileTabBar />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
