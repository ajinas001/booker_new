import FaqClient from './FaqClient';

export const metadata = {
  title: "FAQs — UAE Tax, VAT & E-Invoicing | Booker Accounting",
  description: "Answers to common UAE tax questions: corporate tax, VAT, e-invoicing deadlines & compliance. Updated by Dubai accounting experts.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/faq",
  },
  openGraph: {
    title: "FAQs — UAE Tax, VAT & E-Invoicing | Booker Accounting",
    description: "Answers to common UAE tax questions: corporate tax, VAT, e-invoicing deadlines & compliance. Updated by Dubai accounting experts.",
    url: "https://www.bookeraccounting.com/faq",
  },
  twitter: {
    title: "FAQs — UAE Tax, VAT & E-Invoicing | Booker Accounting",
    description: "Answers to common UAE tax questions: corporate tax, VAT, e-invoicing deadlines & compliance. Updated by Dubai accounting experts.",
  }
};

const faqs = [
  {
    question: "What is e-invoicing in the UAE?",
    answer: "E-invoicing is the process of issuing, transmitting, and storing invoices in a structured electronic format that can be automatically processed by systems."
  },
  {
    question: "When will e-invoicing become mandatory in the UAE?",
    answer: "The UAE plans a phased implementation starting July 2026, with mandatory compliance for large businesses first, followed by SMEs in 2027."
  },
  {
    question: "What format will e-invoices use?",
    answer: "E-invoices must be issued in structured formats such as XML or JSON, based on standards defined by the UAE Ministry of Finance."
  },
  {
    question: "What is an Accredited Service Provider (ASP)?",
    answer: "An ASP is a government-approved platform that enables businesses to generate, validate, transmit, and archive e-invoices."
  },
  {
    question: "Will e-invoices be reported to the tax authority in real time?",
    answer: "Yes, e-invoices are transmitted to the tax authority via the ASP in near real time, improving VAT reporting accuracy."
  },
  {
    question: "What information must an e-invoice include?",
    answer: "An e-invoice includes seller/buyer details, TRNs, invoice number/date, line-item details, VAT rates, and total value."
  },
  {
    question: "How long must e-invoices be stored?",
    answer: "E-invoices must be securely stored for at least five years in accordance with UAE VAT regulations."
  },
  {
    question: "Are there penalties for non-compliance?",
    answer: "Yes, failure to comply may result in monetary penalties, invoice rejection, and VAT compliance issues."
  },
  {
    question: "Do businesses need to change their accounting or ERP systems?",
    answer: "Not always, many systems can be integrated with an ASP, though configuration changes may be required."
  },
  {
    question: "Do all businesses in the UAE need to register for Corporate Tax?",
    answer: "Most businesses must assess their obligations. Requirements depend on the nature of the business and specific FTA regulations."
  },
  {
    question: "What is the Corporate Tax rate in the UAE?",
    answer: "The standard rate is 9% on taxable profits above the applicable threshold."
  },
  {
    question: "How often do VAT returns need to be filed?",
    answer: "Most businesses submit VAT returns quarterly, though the FTA may assign different periods."
  },
  {
    question: "What records should businesses maintain for tax compliance?",
    answer: "Businesses should maintain invoices, receipts, bank statements, contracts, payroll records, and accounting reports."
  },
  {
    question: "What happens if I miss a VAT or Corporate Tax filing deadline?",
    answer: "Missing deadlines may result in penalties, fines, and additional compliance issues."
  },
  {
    question: "Is bookkeeping mandatory for businesses in the UAE?",
    answer: "Yes, maintaining proper records is essential for tax compliance, audits, and financial reporting."
  },
  {
    question: "What is the difference between bookkeeping and accounting?",
    answer: "Bookkeeping records financial transactions, while accounting involves analyzing data and providing financial insights."
  },
  {
    question: "Why is an external audit important?",
    answer: "An external audit provides independent verification of records, strengthens stakeholder confidence, and helps identify risks."
  },
  {
    question: "What is AML compliance and who needs it?",
    answer: "AML helps prevent financial crimes. Certain regulated sectors and designated non-financial businesses must comply with UAE AML regulations."
  },
  {
    question: "How can Booker Accounting help my business?",
    answer: "We provide accounting, bookkeeping, VAT, Corporate Tax, audit, and advisory services to ensure compliance and sustainable growth."
  }
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
