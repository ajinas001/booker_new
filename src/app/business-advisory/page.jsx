import BusinessAdvisoryClient from './BusinessAdvisoryClient';

export const metadata = {
  title: "CFO & Business Advisory Services Dubai | Booker Accounting",
  description: "CFO services, business valuation, M&A and IFRS advisory in Dubai. Strategic financial guidance for UAE SMEs and growing businesses.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/business-advisory",
  },
  openGraph: {
    title: "CFO & Business Advisory Services Dubai | Booker Accounting",
    description: "CFO services, business valuation, M&A and IFRS advisory in Dubai. Strategic financial guidance for UAE SMEs and growing businesses.",
    url: "https://www.bookeraccounting.com/business-advisory",
  },
  twitter: {
    title: "CFO & Business Advisory Services Dubai | Booker Accounting",
    description: "CFO services, business valuation, M&A and IFRS advisory in Dubai. Strategic financial guidance for UAE SMEs and growing businesses.",
  }
};

export default function Page() {
  return <BusinessAdvisoryClient />;
}
