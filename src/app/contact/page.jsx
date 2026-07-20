import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Booker Accounting | Dubai, UAE",
  description: "Contact Booker Accounting in Al Karama, Dubai. Free assessment for bookkeeping, tax, VAT, AML & audit services. WhatsApp +971 56 767 8156.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/contact",
  },
  openGraph: {
    title: "Contact Booker Accounting | Dubai, UAE",
    description: "Contact Booker Accounting in Al Karama, Dubai. Free assessment for bookkeeping, tax, VAT, AML & audit services. WhatsApp +971 56 767 8156.",
    url: "https://www.bookeraccounting.com/contact",
  },
  twitter: {
    title: "Contact Booker Accounting | Dubai, UAE",
    description: "Contact Booker Accounting in Al Karama, Dubai. Free assessment for bookkeeping, tax, VAT, AML & audit services. WhatsApp +971 56 767 8156.",
  }
};

export default function Page() {
  return <ContactClient />;
}
