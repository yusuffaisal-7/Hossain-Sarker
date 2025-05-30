import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className={`text-cream hover:text-mint transition-colors duration-300 ${
        active ? 'font-semibold text-mint' : ''
      }`}
    >
      {text}
    </motion.a>
  );
};

const TypewriterText: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <span className="block text-lg sm:text-xl md:text-2xl text-teal font-bold">
        {displayedText}
        {isTyping && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 ml-1 bg-teal"
          />
        )}
      </span>
    </motion.div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 }
  };

  return (
    <header className="bg-navy text-cream min-h-screen flex flex-col">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Hossain Sarker
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          <NavItem text="About" href="#about" active />
          <NavItem text="Skills" href="#skills" />
          <NavItem text="Experience" href="#experience" />
          <NavItem text="Education" href="#education" />
          <NavItem text="Contact" href="#contact" />
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-cream focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      <div
        className={`md:hidden bg-navy absolute z-10 w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <NavItem text="About" href="#about" active />
          <NavItem text="Skills" href="#skills" />
          <NavItem text="Experience" href="#experience" />
          <NavItem text="Education" href="#education" />
          <NavItem text="Contact" href="#contact" />
        </div>
      </div>
      
      <div className="flex-1 container mx-auto px-6 py-8 md:py-16 flex flex-col items-center justify-center">
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-12"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-teal/20 overflow-hidden border-4 border-teal mx-auto">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1748584572/WhatsApp_Image_2025-05-14_at_14.32.23_gjwamo.jpg" 
              alt="Hossain Sarker"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Name and Content */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          >
            Hossain Sarker
          </motion.h1>
          
          <div className="space-y-4 mb-8">
            <TypewriterText text="Technical Specialist" delay={0.8} />
            <TypewriterText text="Professional Driver" delay={2} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4"
          >
            Experienced professional with expertise in electrical systems, construction, 
            and technical maintenance. Licensed driver with comprehensive skills in 
            both light vehicles and motorcycles.
          </motion.p>
          
          <motion.a
            href="tel:+8801736578225"
            className="inline-block px-8 py-4 bg-mint text-navy font-semibold rounded-md hover:bg-teal transition-all duration-300 text-center w-full sm:w-auto group"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center justify-center">
              Contact Now
              <Phone size={16} className="ml-2 group-hover:animate-pulse" />
            </span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;