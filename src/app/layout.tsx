import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santos Creations Educational Foundation",
  description: "Empowering Africa through education for all",
  metadataBase: new URL('https://pkis-stephenwayars-projects.vercel.app'),
  keywords: ['education', 'Africa', 'foundation', 'internship', 'SCEF', 'Santos Creations', 'educational foundation'],
  openGraph: {
    title: 'Santos Creations Educational Foundation',
    description: 'Empowering Africa through education for all',
    url: 'https://pkis-stephenwayars-projects.vercel.app',
    siteName: 'Santos Creations Educational Foundation',
    images: [
      {
        url: '/assets/imgs/seo-banner.png',
        width: 1200,
        height: 630,
        alt: 'Santos Creations Educational Foundation Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santos Creations Educational Foundation',
    description: 'Empowering Africa through education for all',
    images: ['/assets/imgs/seo-banner.png'],
    creator: '@santoscreations',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "https://www.santoscreations.org/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}