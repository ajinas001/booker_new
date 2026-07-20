import EInvoiceClient from './EInvoiceClient';

export const metadata = {
  title: "UAE E-Invoicing Transformation | Booker Accounting",
  description: "A guide to the UAE E-Invoicing system: deadlines, compliance steps, and how it impacts your business. Learn how to stay compliant with Booker Accounting.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/e-invoice",
  },
  openGraph: {
    title: "UAE E-Invoicing Transformation | Booker Accounting",
    description: "A guide to the UAE E-Invoicing system: deadlines, compliance steps, and how it impacts your business. Learn how to stay compliant with Booker Accounting.",
    url: "https://www.bookeraccounting.com/blog/e-invoice",
  },
  twitter: {
    title: "UAE E-Invoicing Transformation | Booker Accounting",
    description: "A guide to the UAE E-Invoicing system: deadlines, compliance steps, and how it impacts your business. Learn how to stay compliant with Booker Accounting.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "UAE E-Invoicing Transformation",
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
      "@id": "https://www.bookeraccounting.com/blog/e-invoice"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EInvoiceClient />
    </>
  );
}
