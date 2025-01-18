import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { phenomena } from '../data/phenomena';

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }),
  hover: {
    scale: 1.05,
    x: 10,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = {
    'Cosmic Objects': ['black-holes', 'neutron-stars', 'magnetars', 'hypernovae'],
    'Quantum & Space-Time': ['quantum-entanglement', 'time-dilation', 'time-loops', 'spacetime-crystals'],
    'Cosmic Mysteries': ['dark-matter-and-dark-energy', 'cosmic-microwave-background', 'fermi-paradox', 'great-filter'],
    'Advanced Technology': ['dyson-spheres', 'alien-megastructures', 'singularity-engines', 'star-gates', 'quantum-computers'],
    'Space Exploration': ['exoplanets', 'terraforming', 'nanotech-swarms'],
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-purple-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Cosmic Explorer
              </span>
            </Link>
          </motion.div>

          {/* Custom Planet Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-full overflow-hidden 
                     flex items-center justify-center group
                     transition-all duration-300 hover:scale-105
                     drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]
                     hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 360 : 0,
                scale: isOpen ? 1.2 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
            />
            {/* Planet Rings */}
            <motion.div
              animate={{
                rotateX: isOpen ? "90deg" : "25deg",
                scale: isOpen ? 0.8 : 1,
                opacity: isOpen ? 0.5 : 1
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="absolute w-12 h-12 border-2 border-purple-500/30 rounded-full
                       transform -rotate-12"
              style={{
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
              }}
            />
            {/* Menu Lines */}
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -4
              }}
              className="absolute w-5 h-0.5 bg-white rounded-full transform"
            />
            <motion.div
              animate={{
                opacity: isOpen ? 0 : 1
              }}
              className="absolute w-5 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 4
              }}
              className="absolute w-5 h-0.5 bg-white rounded-full transform"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm">
              {Object.entries(categories).map(([category, ids], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  custom={categoryIndex}
                  className="space-y-1"
                >
                  <div className="px-3 py-2 text-white font-medium border-b border-purple-900/30">
                    {category}
                  </div>
                  {ids.map((id, index) => {
                    const phenomenon = phenomena.find(p => p.id === id);
                    return phenomenon ? (
                      <motion.div
                        key={id}
                        variants={itemVariants}
                        custom={index}
                        whileHover="hover"
                      >
                        <Link
                          to={`/${id}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-900/30
                                   rounded-md transition-colors duration-200"
                        >
                          {phenomenon.title}
                        </Link>
                      </motion.div>
                    ) : null;
                  })}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;