import OffshoreClient from './OffshoreClient';

export const metadata = {
  title: "UAE Offshore Corporate Tax Registration | Booker Accounting",
  description: "A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/offshore",
  },
  openGraph: {
    title: "UAE Offshore Corporate Tax Registration | Booker Accounting",
    description: "A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework.",
    url: "https://www.bookeraccounting.com/blog/offshore",
  },
  twitter: {
    title: "UAE Offshore Corporate Tax Registration | Booker Accounting",
    description: "A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "UAE Offshore Corporate Tax Registration",
    "datePublished": "2025-06-01T08:00:00Z",
    "dateModified": "2025-06-01T08:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Booker Accounting & Consulting"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Booker Accounting & Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookeraccounting.com/icon-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookeraccounting.com/blog/offshore"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <OffshoreClient />
    </>
  );
}
