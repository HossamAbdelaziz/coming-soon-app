
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Coach Asmaa - Mental Solutions for Eating Disorders",
  description: "Join Coach Asmaa’s program to develop a healthy mindset and sustainable habits.",
  openGraph: {
    title: "Coach Asmaa - Mental Solutions for Eating Disorders",
    description: "Join Coach Asmaa’s program to develop a healthy mindset and sustainable habits.",
    url: "https://yourwebsite.com",
    siteName: "Coach Asmaa",
    images: [
      {
        url: "/asmaa.jpg", // ✅ Social media preview image
        width: 1200,
        height: 630,
        alt: "Coach Asmaa - Coming Soon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Asmaa - Mental Solutions for Eating Disorders",
    description: "Join Coach Asmaa’s program to develop a healthy mindset and sustainable habits.",
    images: ["/thumbnail.jpg"], // ✅ Twitter preview image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
