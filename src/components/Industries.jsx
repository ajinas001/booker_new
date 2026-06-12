import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, Building2, ShoppingCart, Laptop, Briefcase, Truck, Heart, 
  GraduationCap, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Users,
  ChevronLeft, ChevronRight, Play, Pause, Target, Award
} from 'lucide-react';

const industries = [
  { 
    id: 'oil-gas',
    icon: Factory, 
    name: "Oil & Gas", 
    desc: "Regulatory compliance and tax planning for energy sector",
    fullDesc: "Comprehensive financial services tailored for the energy sector, including regulatory compliance, tax optimization, and strategic financial planning for oil and gas companies navigating the transition to sustainable energy.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    stats: "50+ Projects",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop",
    services: ["Tax Planning", "Compliance", "Financial Audits", "Risk Management"],
    growth: "+15% YoY",
    features: ["Sustainable Energy", "Global Operations", "Regulatory Expertise"]
  },
  { 
    id: 'construction',
    icon: Building2, 
    name: "Construction & Real Estate", 
    desc: "Project accounting to VAT compliance",
    fullDesc: "End-to-end accounting solutions for construction firms and real estate developers, from project costing to VAT compliance and revenue recognition in Dubai's dynamic property market.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
    stats: "80+ Clients",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    services: ["Project Accounting", "VAT Compliance", "Cost Control", "Financial Reporting"],
    growth: "+22% YoY",
    features: ["Mega Projects", "VAT Expertise", "Cost Optimization"]
  },
  { 
    id: 'retail',
    icon: ShoppingCart, 
    name: "Retail & E-commerce", 
    desc: "Inventory control and sales tax solutions",
    fullDesc: "Specialized accounting for retail and e-commerce businesses, including inventory management, sales tax compliance, and multi-channel revenue tracking across UAE markets.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
    stats: "100+ Stores",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    services: ["Inventory Management", "Sales Tax", "E-commerce Accounting", "POS Integration"],
    growth: "+18% YoY",
    features: ["Multi-channel", "Inventory Tech", "Tax Solutions"]
  },
  { 
    id: 'technology',
    icon: Laptop, 
    name: "IT & Technology", 
    desc: "Support for fast-growing tech companies",
    fullDesc: "Agile financial solutions for tech startups and IT companies, supporting rapid growth with scalable accounting systems and strategic CFO services in the digital economy.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
    stats: "60+ Startups",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    services: ["Startup CFO", "Growth Strategy", "Investor Reporting", "Financial Modeling"],
    growth: "+35% YoY",
    features: ["Startup Focus", "Tech Innovation", "Growth Funding"]
  },
  { 
    id: 'professional',
    icon: Briefcase, 
    name: "Professional Services", 
    desc: "Advisory for consultants and agencies",
    fullDesc: "Tailored accounting for professional service firms, consultancies, and agencies with focus on project profitability and resource management in competitive markets.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    stats: "70+ Firms",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    services: ["Project Profitability", "Time Tracking", "Resource Planning", "Client Billing"],
    growth: "+12% YoY",
    features: ["Consulting Focus", "Project Management", "Client Relations"]
  },
  { 
    id: 'trading',
    icon: Truck, 
    name: "Trading & Distribution", 
    desc: "Customs and VAT support",
    fullDesc: "Comprehensive solutions for trading companies including customs compliance, VAT on imports/exports, and supply chain financial management across global markets.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-600",
    stats: "90+ Traders",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    services: ["Customs Compliance", "Import/Export VAT", "Supply Chain Finance", "Trade Documentation"],
    growth: "+20% YoY",
    features: ["Global Trade", "Customs Expertise", "Logistics Finance"]
  },
  { 
    id: 'healthcare',
    icon: Heart, 
    name: "Healthcare & Wellness", 
    desc: "Financial planning for clinics",
    fullDesc: "Specialized accounting for healthcare providers, clinics, and wellness centers with expertise in medical billing and healthcare compliance across the region.",
    color: "from-rose-500 to-red-600",
    bgColor: "bg-gradient-to-br from-rose-500 to-red-600",
    stats: "40+ Clinics",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
    services: ["Medical Billing", "Insurance Claims", "Clinic Management", "Healthcare Compliance"],
    growth: "+25% YoY",
    features: ["Medical Expertise", "Insurance Processing", "Clinic Operations"]
  },
  { 
    id: 'education',
    icon: GraduationCap, 
    name: "Education & Training", 
    desc: "Accounting for training institutes",
    fullDesc: "Financial management for educational institutions and training centers, including student fee management and educational compliance in evolving learning environments.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
    stats: "35+ Institutes",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    services: ["Fee Management", "Grant Accounting", "Educational Compliance", "Budget Planning"],
    growth: "+16% YoY",
    features: ["Education Focus", "Grant Management", "Digital Learning"]
  }
];

const IndustryCard = ({ industry, isActive, onClick }) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105' : 'scale-95 opacity-70 hover:opacity-90'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`rounded-2xl p-6 h-48 relative overflow-hidden border-2 ${
        isActive ? 'border-white shadow-2xl' : 'border-slate-600 shadow-lg'
      } ${industry.bgColor}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <industry.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{industry.name}</h3>
              <p className="text-white/90 text-sm">{industry.desc}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="text-2xl font-bold">{industry.stats}</div>
              <div className="text-sm opacity-90">{industry.growth}</div>
            </div>
            {isActive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef(null);

  const activeIndustry = industries[activeIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoPlay, industries.length]);

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Navigation handlers
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') setAutoPlay(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 font-inter text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-emerald-500/30 mb-6"
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
            Industries We Serve
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Transforming <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Businesses</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-300 max-w-3xl mx-auto"
        >
          Specialized financial solutions tailored for diverse sectors across Dubai and the UAE
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="text-sm">Auto {autoPlay ? 'Pause' : 'Play'}</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-sm text-slate-400 min-w-[80px] text-center">
              {activeIndex + 1} / {industries.length}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Industry Cards Carousel - Fixed horizontal scroll only */}
        <div className="relative mb-12">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              // Hide scrollbars
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {industries.map((industry, index) => (
              <div key={industry.id} className="snap-center">
                <IndustryCard
                  industry={industry}
                  isActive={index === activeIndex}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>
          {/* Hide webkit scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Active Industry Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {activeIndustry.name}
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {activeIndustry.fullDesc}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{activeIndustry.stats}</div>
                  <div className="text-slate-400 text-sm">Successful Projects</div>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <Target className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{activeIndustry.growth}</div>
                  <div className="text-slate-400 text-sm">Annual Growth</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Our Services
                </h4>
                <div className="flex flex-wrap gap-3">
                  {activeIndustry.services.map((service, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 text-sm"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full lg:w-auto px-8 py-4 bg-gradient-to-r ${activeIndustry.color} text-white font-semibold rounded-xl shadow-2xl flex items-center justify-center gap-3 group`}
              >
                <span>Get Started with {activeIndustry.name}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    className="w-full h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/1e293b/64748b?text=${encodeURIComponent(activeIndustry.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`absolute top-6 right-6 w-16 h-16 rounded-2xl ${activeIndustry.bgColor} flex items-center justify-center shadow-2xl`}
                  >
                    <activeIndustry.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;