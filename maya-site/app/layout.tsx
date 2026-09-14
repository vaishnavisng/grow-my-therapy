import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// Placeholder domain — swap for the real one before launch.
const SITE_URL = "https://drmayareynolds.com";
const TITLE =
  "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA";
const DESCRIPTION =
  "Licensed clinical psychologist Dr. Maya Reynolds, PsyD, offers anxiety, panic, trauma (EMDR), and burnout therapy for adults in Santa Monica and online across California. Warm, collaborative, evidence-based care.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "therapist in Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapy Santa Monica",
    "burnout therapy",
    "therapy for adults",
    "online therapy California",
    "clinical psychologist Santa Monica",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dr. Maya Reynolds, PsyD",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/office-1.jpg",
        width: 1500,
        height: 1125,
        alt: "Dr. Reynolds' naturally-lit therapy office in Santa Monica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/office-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
