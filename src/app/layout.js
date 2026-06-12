
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import LoadingScreen from "@/components/LoadingSreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Booker Accounting & Consulting",
    template: "%s | Booker Accounting & Consulting",
  },

  description:
    "Booker Accounting and Consulting provides expert bookkeeping, tax compliance, and strategic financial advisory services to help businesses build a balanced and brilliant financial future.",

  keywords: [
    "Bookkeeping Services",
    "Financial Advisory",
    "Tax Compliance",
    "Business Accounting",
    "Dubai Accounting Firm",
    "UAE Accounting Services",
    "Booker Accounting and Consulting",
  ],

  // ✅ THIS CONTROLS GOOGLE SEARCH ICON
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Booker Accounting & Consulting",
    description:
      "Expert bookkeeping, tax compliance, and strategic financial advisory services in the UAE.",
    url: "https://bookeraccounting.com",
    siteName: "Booker Accounting & Consulting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bookeraccounting.com/icon-512.png",
        width: 512,
        height: 512,
        alt: "Booker Accounting & Consulting Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Booker Accounting & Consulting",
    description:
      "Expert bookkeeping, tax compliance, and strategic financial advisory services in the UAE.",
    images: ["https://bookeraccounting.com/icon-512.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans 
          antialiased
        `}
        style={{
          fontFamily: '"cordiau", var(--font-geist-sans), sans-serif',
        }}
      >
        <LenisWrapper>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Booker Accounting & Consulting",
                url: "https://bookeraccounting.com",
                logo: "https://bookeraccounting.com/icon-512.png",
              }),
            }}
          />

          {children}
        </LenisWrapper>

      </body>
    </html>
  );
}
