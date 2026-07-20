import EInvoicingClient from './EInvoicingClient';

export const metadata = {
  title: "The Paper Trail Ends Here: Why E-Invoicing Is No Longer Optional | Booker Accounting",
  description: "Why e-invoicing is becoming mandatory in the UAE, the cost of processing paper invoices, and the structural advantages of early transition.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/e-invoicing",
  },
  openGraph: {
    title: "The Paper Trail Ends Here: Why E-Invoicing Is No Longer Optional | Booker Accounting",
    description: "Why e-invoicing is becoming mandatory in the UAE, the cost of processing paper invoices, and the structural advantages of early transition.",
    url: "https://www.bookeraccounting.com/blog/e-invoicing",
  },
  twitter: {
    title: "The Paper Trail Ends Here: Why E-Invoicing Is No Longer Optional | Booker Accounting",
    description: "Why e-invoicing is becoming mandatory in the UAE, the cost of processing paper invoices, and the structural advantages of early transition.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Paper Trail Ends Here: Why E-Invoicing Is No Longer Optional",
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
      "@id": "https://www.bookeraccounting.com/blog/e-invoicing"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EInvoicingClient />
    </>
  );
}
