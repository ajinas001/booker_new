import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Shield, TrendingUp, Award, CheckCircle2, Target } from 'lucide-react';

function Whychoose() {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            id: 0,  
            title: "Owner-Managed Focus",
            tagline: "Built for entrepreneurs and business owners",
            description: "We specialize in serving privately owned companies across Dubai and the UAE, providing hands-on support to increase profitability and protect your wealth.",
            image: "/images/handshake.webp",
            icon: Users
        },
        {
            id: 1,
            title: "Proven Local Expertise",
            tagline: "15+ years of UAE compliance excellence",
            description: "Deep knowledge of UAE business regulations and tax requirements. We treat every client's business as our own with dependable, result-driven accounting services.",
            image: "/images/video-bg.webp",
            icon: Shield
        },
        {
            id: 2,
            title: "Customized Solutions",
            tagline: "Tailored strategies for your success",
            description: "Direct partner-level attention with customized accounting, bookkeeping, and tax strategies designed specifically to meet your unique business objectives and growth goals.",
            image: "/images/taxation1.webp",
            icon: TrendingUp
        }
    ];

    const activeFeature = features[activeTab];
    const Icon = activeFeature.icon;

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <section
            className="relative py-20 lg:py-28 overflow-hidden text-white"
            style={{
                backgroundImage: "url('./images/imag.jpg')", // Replace with your own background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}

        >
            <div className="absolute inset-0  bg-primary " />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10" />
            {/* Background Pattern Overlay */}
           

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="inline-block w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full  border-secondary mb-6 ">
                        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Hire Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 max-w-2xl">
                        You can focus your efforts on running{' '}
                        <span className="italic text-secondary">your business</span>
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 pb-6">
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full font-semibold text-sm transition-all duration-300
                ${activeTab === index
                                    ? 'bg-secondary text-white '
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                                }
              `}
                        >
                            {feature.title}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid lg:grid-cols-2 gap-8 items-center"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Main Large Image */}
                                <div className="col-span-2 relative rounded-2xl overflow-hidden  transform transition-all duration-700 hover:scale-105">
                                    <img
                                        src={activeFeature.image}
                                        alt={activeFeature.title}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Floating Icon Badge */}
                                    <div className="absolute top-6 left-6 w-16 h-16 bg-secondary rounded-xl flex items-center justify-center ">
                                        <Icon className="w-8 h-8 text-black" />
                                    </div>
                                </div>

                                {/* Small Secondary Image */}
                                <div className="relative rounded-xl overflow-hidden  h-40">
                                    <img
                                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>

                                {/* Small Stats Card */}
                                <div className="relative rounded-xl bg-gradient-to-br from-secondary to-teal-600 p-6  h-40 flex flex-col justify-center">
                                    <div className="text-4xl font-bold text-white mb-1">150+</div>
                                    <div className="text-sm text-black">Businesses Trust Us</div>
                                    <CheckCircle2 className="absolute bottom-4 right-4 w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-black mb-3">
                                    {activeFeature.tagline}
                                </h3>
                                <p className="text-lg text-black leading-relaxed">
                                    {activeFeature.description}
                                </p>
                            </div>

                            {/* Feature Highlights */}
                            <div className="space-y-3 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                                    </div>
                                    <p className="text-black">
                                        Dedicated partner-level attention for every client
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                                    </div>
                                    <p className="text-black">
                                        Proactive financial strategies tailored to your goals
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                                    </div>
                                    <p className="text-black">
                                        Complete UAE compliance and regulatory expertise
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <button className="group inline-flex items-center gap-3 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full bg-secondary text-white font-semibold rounded-lg  transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                                    <span>Get Started Today</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Trust Section */}
                
            </div>
        </section>
    );
}

export default Whychoose;
