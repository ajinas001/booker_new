import React from 'react'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Shield, Users, Briefcase, FileText, Calculator, BarChart3, Building2, ShoppingCart, Laptop, Truck, Heart, GraduationCap, Factory } from 'lucide-react';


function Faqs() {
     const faqs = [
    {
      q: "Why choose an accounting partner instead of hiring in-house?",
      a: "You get an entire team of qualified professionals including tax experts, auditors, bookkeepers, and compliance advisors for less than the cost of one in-house hire. We offer scalable expertise that grows with you."
    },
    {
      q: "Can you help businesses behind on accounting or tax filings?",
      a: "Absolutely. We regularly assist businesses with backlogs, reviewing your position and working swiftly to bring everything up to date, minimizing risks and penalties."
    },
    {
      q: "Do you assist with corporate tax registration?",
      a: "Yes. We help you register for UAE Corporate Tax, assess obligations, and develop tax-efficient structures to reduce liability. We also handle regular tax filings and ensure all documentation and deadlines are met."
    },
    {
      q: "Who must register for Corporate Tax in the UAE?",
      a: "All businesses operating in UAE Mainland and Free Zone must register with the Federal Tax Authority (FTA), regardless of income. This is mandatory for compliance."
    }
  ];
  return (
    <div>
        <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about compliance in the UAE</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light-primary p-6 rounded-xl border-l-4 border-accent shadow-md">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <ChevronDown className="w-5 h-5 text-accent mr-2 transform rotate-270" /> {faq.q}
                </h3>
                <p className="text-gray-600 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faqs
