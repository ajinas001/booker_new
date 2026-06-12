import React, { useState } from 'react';
import { CheckCircle, TrendingUp, DollarSign, FileText, BarChart3, ArrowRight, Zap, Target } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('process');
  const [expandedStep, setExpandedStep] = useState(0);

  const processSteps = [
    {
      num: '01',
      title: 'Financial Health Check & Assessment',
      description: 'We diagnose your current financial situation and identify exactly what you need.',
      details: [
        '✓ Analyze your current bookkeeping setup (or lack thereof)',
        '✓ Review all existing financial records and identify gaps',
        '✓ Assess VAT compliance status and tax filing history',
        '✓ Understand your business model, transaction volume, and cash flow',
        '✓ Identify pain points and compliance risks',
        '✓ Evaluate current systems and processes'
      ],
      time: '1-2 weeks'
    },
    {
      num: '02',
      title: 'Customized Plan & Recommendations',
      description: 'Based on our assessment, we create a tailored strategy and recommend the exact services you need.',
      details: [
        '✓ Present detailed findings from health check',
        '✓ Identify what\'s working and what needs fixing',
        '✓ Recommend specific services (bookkeeping, tax planning, audit)',
        '✓ Provide transparent pricing based on YOUR actual needs',
        '✓ Create a timeline and implementation plan',
        '✓ Answer all your questions and address concerns'
      ],
      time: '1 week',
      highlight: true
    },
    {
      num: '03',
      title: 'System Setup & Organization',
      description: 'We implement proper bookkeeping systems and set up accounting processes tailored to your business.',
      details: [
        '✓ Set up accounting software (QuickBooks, Zoho, etc.)',
        '✓ Create proper chart of accounts for your industry',
        '✓ Establish VAT/tax filing structure',
        '✓ Clean up historical records if needed',
        '✓ Train your team on new processes'
      ],
      time: '2-3 weeks'
    },
    {
      num: '04',
      title: 'Monthly Bookkeeping & Reconciliation',
      description: 'We handle all monthly transactions, ensure accuracy, and keep your books reconciled.',
      details: [
        '✓ Record all invoices and expenses accurately',
        '✓ Bank reconciliation and payment tracking',
        '✓ Monthly financial reports generation',
        '✓ Regular review and quality checks',
        '✓ Instant access to your financial data'
      ],
      time: 'Ongoing'
    },
    {
      num: '05',
      title: 'Tax Planning & Optimization',
      description: 'We identify tax-saving opportunities and ensure you pay only what you owe.',
      details: [
        '✓ Quarterly tax planning reviews',
        '✓ VAT compliance and timely filing',
        '✓ Deduction optimization and tax strategy',
        '✓ Corporate tax planning aligned with UAE regulations',
        '✓ Proactive alerts for tax deadlines'
      ],
      time: 'Quarterly'
    },
    {
      num: '06',
      title: 'Reporting, Insights & Compliance',
      description: 'We provide clear reports, actionable insights, and handle all regulatory requirements.',
      details: [
        '✓ Monthly P&L statements and cash flow analysis',
        '✓ Key business metrics dashboard',
        '✓ Year-end financial statements',
        '✓ Annual audit preparation and support',
        '✓ Regulatory compliance and documentation'
      ],
      time: 'Monthly + Annual'
    }
  ];

  const results = [
    { icon: DollarSign, label: 'Average Tax Savings', value: 'AED 45K+', color: 'bg-teal-500' },
    { icon: TrendingUp, label: 'Financial Clarity', value: '100%', color: 'bg-teal-400' },
    { icon: FileText, label: 'Compliance Rate', value: '99.8%', color: 'bg-teal-600' },
    { icon: BarChart3, label: 'Time Saved', value: '20+ hrs/month', color: 'bg-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Logo */}
        <div className="pt-12 pb-8 border-b border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="inline-block mb-4">
                <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
                  {/* Triangle logo inspired by brand */}
                  <polygon points="40,10 65,60 15,60" fill="#4A9FB5" opacity="0.8"/>
                  <polygon points="40,25 55,55 25,55" fill="#0F2E3D"/>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Build, Balance, Brilliance</h1>
              <p className="text-lg text-teal-600 font-semibold">Your Path to Financial Clarity</p>
            </div>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            From diagnosis to transformation. We assess, plan, and execute—so you get exactly what you need, nothing more, nothing less.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mt-12 justify-center mb-12">
          <button
            onClick={() => setActiveTab('process')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'process'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Our Process
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'results'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Results & Testimonials
          </button>
        </div>

        {/* Process Section */}
        {activeTab === 'process' && (
          <div className="space-y-6 pb-12">
            {processSteps.map((step, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
                  className={`w-full p-6 rounded-lg transition-all text-left group ${
                    step.highlight
                      ? 'bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-500 hover:border-teal-600'
                      : 'bg-white border-2 border-gray-200 hover:border-teal-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="text-4xl font-bold text-teal-600">{step.num}</div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{step.title}</h3>
                          {step.highlight && (
                            <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">KEY STEP</span>
                          )}
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm text-gray-500 mb-2">{step.time}</div>
                      <ArrowRight className={`w-6 h-6 text-teal-600 transition-transform ${expandedStep === idx ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedStep === idx && (
                  <div className={`p-6 rounded-b-lg space-y-3 border-t-2 ${
                    step.highlight
                      ? 'bg-teal-50 border-teal-500'
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    {step.details.map((detail, didx) => (
                      <div key={didx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Flow Visualization */}
            <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Why Our Assessment-First Approach Works</h3>
              <p className="mb-6 text-teal-100">
                After step 2, you'll receive a detailed proposal that outlines EXACTLY what you need and what it costs. No guessing. No surprise charges. Just transparency and a clear roadmap forward. Pricing depends entirely on your assessment results—from AED 200 for minimal needs to AED 200K+ for comprehensive enterprise solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-sm font-bold mb-2 text-teal-200">WHAT YOU NEED</div>
                  <p className="text-teal-50">Services tailored specifically to your business, not generic packages</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-sm font-bold mb-2 text-teal-200">TRANSPARENT PRICING</div>
                  <p className="text-teal-50">Exact cost based on your transaction volume and complexity</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-sm font-bold mb-2 text-teal-200">CLEAR TIMELINE</div>
                  <p className="text-teal-50">When you'll see results and improvements in your finances</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {activeTab === 'results' && (
          <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {results.map((result, idx) => {
                const Icon = result.icon;
                return (
                  <div key={idx} className={`${result.color} p-8 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow`}>
                    <Icon className="w-12 h-12 mb-4 opacity-90" />
                    <div className="text-sm opacity-80 mb-2">{result.label}</div>
                    <div className="text-4xl font-bold">{result.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Client Testimonials */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What Our Clients Say</h3>
              <p className="text-gray-600 mb-6">Trusted by 200+ businesses across UAE</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-teal-400 transition-colors shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"We were completely lost with our bookkeeping. The health check identified we were missing AED 45K in tax deductions, and proper systems were set up. Now I have complete financial clarity every month. Worth every dirham."</p>
                  <div>
                    <h4 className="font-bold text-gray-900">E-Commerce Business Owner</h4>
                    <p className="text-gray-500 text-sm">Dubai</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-teal-400 transition-colors shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"As a startup, we didn't know if we needed full accounting or just basics. The assessment showed exactly what we needed. Transparent pricing. They freed up 20 hours a month for me to focus on growth and sales."</p>
                  <div>
                    <h4 className="font-bold text-gray-900">Startup Founder</h4>
                    <p className="text-gray-500 text-sm">Abu Dhabi</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-teal-400 transition-colors shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"VAT compliance was stressing me out constantly. They took it all off my plate. Quarterly planning and optimization saved us AED 60K last year. Best business decision we made."</p>
                  <div>
                    <h4 className="font-bold text-gray-900">Import-Export Trader</h4>
                    <p className="text-gray-500 text-sm">Sharjah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Benefits */}
            <div className="bg-gray-50 p-8 rounded-lg space-y-4 mb-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Clients Actually Get</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Complete diagnosis of your financial health before we start',
                  'Custom plan built specifically for YOUR business needs',
                  'Transparent pricing—you know exactly what you\'re paying for',
                  'Monthly clarity on cash flow, profitability, and performance',
                  'Peace of mind knowing all taxes are filed correctly',
                  'Strategic recommendations to save thousands in taxes',
                  'Organized financial records ready for any audit',
                  '20+ hours per month back to focus on growing your business'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Clients Choose Booker Accounting</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">We Assess First, Not Sell First</h4>
                    <p className="text-gray-700 text-sm">No pressure. We diagnose your financial situation before recommending solutions. This ensures you only pay for what you actually need.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Custom Solutions, Not One-Size-Fits-All</h4>
                    <p className="text-gray-700 text-sm">Your plan is built specifically for your business, industry, and complexity. From AED 200 to AED 200K+, we scale to YOUR needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Complete Transparency</h4>
                    <p className="text-gray-700 text-sm">We explain what we do, why we do it, and what you'll gain. No hidden fees. No surprises. Just honest, clear communication.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">UAE Expertise</h4>
                    <p className="text-gray-700 text-sm">Deep understanding of UAE tax regulations, VAT compliance, and corporate requirements across all emirates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 mb-12 text-center bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-3">Let's Start With a FREE Health Check</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">Get a comprehensive financial assessment and customized plan tailored to your business. No obligation. No credit card needed.</p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg">
            Book Your FREE Assessment Call
          </button>
          <p className="text-teal-100 text-sm mt-4">30-min call • Personalized recommendations • Transparent pricing quote within 48 hours</p>
        </div>
      </div>
    </div>
  );
}