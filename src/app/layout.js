import { Inter, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import LoadingScreen from "@/components/LoadingSreen";
import FloatingService from "@/components/FloatingService";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.bookeraccounting.com"),
  alternates: {
    canonical: "/",
  },
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

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Booker Accounting & Consulting",
    description:
      "Expert bookkeeping, tax compliance, and strategic financial advisory services in the UAE.",
    url: "https://www.bookeraccounting.com",
    siteName: "Booker Accounting & Consulting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bookeraccounting.com/icon-512.png",
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
    images: ["https://www.bookeraccounting.com/icon-512.png"],
  },

  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "msvalidate.01": "bing-site-verification-placeholder",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${inter.variable}
          ${geistMono.variable}
          
      
          antialiased
        `}
      >
        <LenisWrapper>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AccountingService",
                "name": "Booker Accounting & Consulting",
                "url": "https://www.bookeraccounting.com",
                "logo": "https://www.bookeraccounting.com/icon-512.png",
                "telephone": "+971567678156",
                "email": "info@bookeraccounting.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "R364 Al Wasl Building, Unique World Business Center, Office 12, Al Karama",
                  "addressLocality": "Dubai",
                  "addressCountry": "AE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 25.2474167,
                  "longitude": 55.3088056
                },
                "areaServed": "United Arab Emirates",
                "priceRange": "AED 200 - AED 200,000",
                "sameAs": [
                  "https://www.linkedin.com/company/bookeraccounting/",
                  "https://www.instagram.com/booker_consulting",
                  "https://www.facebook.com/share/1bsoQ3j3Km/",
                  "https://www.trustpilot.com/review/bookeraccounting.com"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Bookkeeping & Accounting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Tax Advisory"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "VAT Advisory & Compliance"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AML Compliance Consultancy"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Audit & Assurance"
                      }
                    }
                  ]
                }
              }),
            }}
          />

          {children}
          <FloatingActions />
          <FloatingService />
        </LenisWrapper>
      </body>
    </html>
  );
}