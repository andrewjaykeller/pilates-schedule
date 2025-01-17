import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Pilates with AJ",
  description: "Join our mindful movement practice - free Pilates classes with AJ",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://pilates.ajkeller.dev'),
  openGraph: {
    title: 'Free Pilates with AJ',
    description: 'Join our mindful movement practice - free Pilates classes with AJ',
    images: [{
      url: '/social-share.png',
      width: 1200,
      height: 630,
      alt: 'Free Pilates with AJ - Join our mindful movement practice',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Pilates with AJ',
    description: 'Join our mindful movement practice - free Pilates classes with AJ',
    images: ['/social-share.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
