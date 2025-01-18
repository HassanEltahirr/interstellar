import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { phenomena } from '../data/phenomena';

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: index * 0.15,
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }),
  hover: {
    y: -12,
    scale: 1.04,
    rotateX: 5,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-black py-6 sm:py-8 lg:py-12">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold cosmic-text mb-6 sm:mb-8 lg:mb-10 
                     tracking-tight leading-tight"
          >
            Explore the Cosmos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-blue-200/90 mb-10 sm:mb-12 lg:mb-16
                     font-light leading-relaxed max-w-3xl mx-auto"
          >
            Journey through space and time, from black holes to quantum realms
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Phenomena */}
      <div ref={ref} className="container max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold cosmic-text text-center mb-16 sm:mb-20 lg:mb-28
                   tracking-tight leading-tight"
        >
          Cosmic Phenomena
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {phenomena.map((phenomenon, index) => (
            <motion.div
              key={phenomenon.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              className="phenomenon-card group bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden
                       border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-500"
            >
              <Link to={`/${phenomenon.id}`}>
                <div className="cosmic-card-gradient h-52 sm:h-64 lg:h-72 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10 relative">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 cosmic-title group-hover:scale-105 
                               transition-transform duration-500 tracking-tight">
                    {phenomenon.title}
                  </h3>
                  <p className="text-gray-300/90 text-lg leading-relaxed group-hover:text-white/90 
                               transition-colors duration-500">
                    {phenomenon.shortDescription}
                  </p>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 
                               transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <span className="text-blue-400 font-medium flex items-center gap-2">
                      Explore 
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;