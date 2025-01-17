import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BodyRok with AJ",
  description: "Join AJ's Pilates practice classes at BodyRok",
  icons: {
    icon: '/favicon.svg',
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
