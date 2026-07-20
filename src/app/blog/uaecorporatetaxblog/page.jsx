import UaeCorporateTaxBlogClient from './UaeCorporateTaxBlogClient';

export const metadata = {
  title: "No More Tax-Free by Default: UAE Corporate Tax — Everything Business Owners Need to Know | Booker Accounting",
  description: "The UAE introduced Corporate Tax in June 2023. Read our plain-English guide on what you need to know and do right now to ensure compliance.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/uaecorporatetaxblog",
  },
  openGraph: {
    title: "No More Tax-Free by Default: UAE Corporate Tax — Everything Business Owners Need to Know | Booker Accounting",
    description: "The UAE introduced Corporate Tax in June 2023. Read our plain-English guide on what you need to know and do right now to ensure compliance.",
    url: "https://www.bookeraccounting.com/blog/uaecorporatetaxblog",
  },
  twitter: {
    title: "No More Tax-Free by Default: UAE Corporate Tax — Everything Business Owners Need to Know | Booker Accounting",
    description: "The UAE introduced Corporate Tax in June 2023. Read our plain-English guide on what you need to know and do right now to ensure compliance.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "No More Tax-Free by Default: UAE Corporate Tax — Everything Business Owners Need to Know",
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
      "@id": "https://www.bookeraccounting.com/blog/uaecorporatetaxblog"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <UaeCorporateTaxBlogClient />
    </>
  );
}
