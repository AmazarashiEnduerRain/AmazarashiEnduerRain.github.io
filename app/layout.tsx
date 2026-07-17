import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://AmazarashiEnduerRain.github.io"),
  title: {
    default: "Liangxu Wei — Academic Homepage",
    template: "%s — Liangxu Wei",
  },
  description:
    "The academic homepage of Liangxu Wei: research interests, selected work, education, and contact information.",
  authors: [{ name: "Liangxu Wei" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Liangxu Wei — Academic Homepage",
    description:
      "Research interests, selected work, education, and contact information.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Liangxu Wei — Academic Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liangxu Wei — Academic Homepage",
    description:
      "Research interests, selected work, education, and contact information.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
