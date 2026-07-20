import BlogClient from './BlogClient';

export const metadata = {
  title: "UAE Tax & Accounting Insights | Booker Blog",
  description: "UAE tax, VAT, corporate tax & e-invoicing insights from Dubai accountants. Practical guides to keep your business compliant and growing.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog",
  },
  openGraph: {
    title: "UAE Tax & Accounting Insights | Booker Blog",
    description: "UAE tax, VAT, corporate tax & e-invoicing insights from Dubai accountants. Practical guides to keep your business compliant and growing.",
    url: "https://www.bookeraccounting.com/blog",
  },
  twitter: {
    title: "UAE Tax & Accounting Insights | Booker Blog",
    description: "UAE tax, VAT, corporate tax & e-invoicing insights from Dubai accountants. Practical guides to keep your business compliant and growing.",
  }
};

export default function Page() {
  return <BlogClient />;
}
