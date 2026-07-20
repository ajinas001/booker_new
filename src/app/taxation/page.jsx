import TaxationClient from './TaxationClient';

export const metadata = {
  title: "Corporate Tax & VAT Advisory Services in Dubai | FTA Tax Agent | Booker",
  description: "Corporate tax & VAT advisory in Dubai. FTA-approved tax agent for registration, filing, transfer pricing & audits. Avoid penalties — talk to us.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/taxation",
  },
  openGraph: {
    title: "Corporate Tax & VAT Advisory Services in Dubai | FTA Tax Agent | Booker",
    description: "Corporate tax & VAT advisory in Dubai. FTA-approved tax agent for registration, filing, transfer pricing & audits. Avoid penalties — talk to us.",
    url: "https://www.bookeraccounting.com/taxation",
  },
  twitter: {
    title: "Corporate Tax & VAT Advisory Services in Dubai | FTA Tax Agent | Booker",
    description: "Corporate tax & VAT advisory in Dubai. FTA-approved tax agent for registration, filing, transfer pricing & audits. Avoid penalties — talk to us.",
  }
};

export default function Page() {
  return <TaxationClient />;
}
