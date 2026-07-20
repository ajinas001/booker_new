import AccountingBookkeepingClient from './AccountingBookkeepingClient';

export const metadata = {
  title: "Bookkeeping & Accounting Services in Dubai, UAE | Booker",
  description: "Professional bookkeeping & accounting services in Dubai, UAE. Cloud accounting, financial reporting & audit-ready books from AED 200/month.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/accounting-bookkeeping",
  },
  openGraph: {
    title: "Bookkeeping & Accounting Services in Dubai, UAE | Booker",
    description: "Professional bookkeeping & accounting services in Dubai, UAE. Cloud accounting, financial reporting & audit-ready books from AED 200/month.",
    url: "https://www.bookeraccounting.com/accounting-bookkeeping",
  },
  twitter: {
    title: "Bookkeeping & Accounting Services in Dubai, UAE | Booker",
    description: "Professional bookkeeping & accounting services in Dubai, UAE. Cloud accounting, financial reporting & audit-ready books from AED 200/month.",
  }
};

export default function Page() {
  return <AccountingBookkeepingClient />;
}
