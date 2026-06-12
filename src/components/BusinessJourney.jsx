import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BusinessJourney = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stages = [
    { id: 1, title: 'Tax registration', icon: '📋' },
    { id: 2, title: 'Accounting and Bookkeeping', icon: '📊' },
    { id: 3, title: 'Taxation & Compliance', icon: '📝' },
    { id: 4, title: 'Audit & Financial Reviews', icon: '🔍' },
    { id: 5, title: 'Advisory & Restructuring', icon: '💡' },
    { id: 6, title: 'Liquidation/ De-registration', icon: '📄' }
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut'
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-primary text-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-6 py-20 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            One Firm. Every Step.
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-cyan-400 mb-8">
            With a Strategic Edge.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg lg:text-xl text-slate-300 max-w-4xl leading-relaxed"
          >
            From start to finish we guide your business through every stage of its lifecycle whether you're starting up, scaling, restructuring, or winding down. With deep expertise in UAE and international markets, we ensure your journey is smooth, compliant, and strategically sound.
          </motion.p>
        </motion.div>
      </div>

      {/* Journey Path Section */}
      <div className="relative px-6 py-20 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative"
            >
              {/* SVG Path */}
              <svg className="absolute inset-0 w-full h-96" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <motion.path
                  d="M 100 200 Q 200 100, 300 200 T 500 200 T 700 200 T 900 200 T 1100 200 T 1300 200"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  variants={pathVariants}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stage Points */}
              <div className=" text-whiterelative grid grid-cols-6 gap-8 pt-24 pb-24">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    variants={itemVariants}
                    className="flex flex-col items-center"
                    style={{ marginTop: index % 2 === 0 ? '0' : '8rem' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-2xl shadow-cyan-500/50 border-4 border-slate-800 relative z-10"
                    >
                      {stage.icon}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="mt-6 text-center"
                    >
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        {String(stage.id).padStart(2, '0')}
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-tight max-w-32">
                        {stage.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-8"
            >
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  variants={itemVariants}
                  className="flex items-center gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-xl shadow-cyan-500/50 border-4 border-slate-800 flex-shrink-0"
                  >
                    {stage.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-cyan-400 font-bold text-base mb-1">
                      {String(stage.id).padStart(2, '0')}
                    </div>
                    <h3 className="text-white font-semibold text-base">
                      {stage.title}
                    </h3>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="absolute left-10 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-600" style={{ top: '100%', marginTop: '-1rem' }} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default BusinessJourney;