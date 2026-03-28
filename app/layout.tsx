import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://block-basics.vercel.app"; 

export const metadata: Metadata = {
  title: "Block Basics // Protocol Override",
  description: "30-Day Blockchain Journey: Master the Ledger.",
  openGraph: {
    title: "Block Basics // Protocol Override",
    description: "Intercept the stream. Secure the ledger.",
    url: siteUrl,
    siteName: "Block Basics",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cyber Terminal Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Basics // Protocol Override",
    description: "Master the fundamentals of the ledger in 30 days.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
