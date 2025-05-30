import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <header className="bg-navy text-cream">
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
      
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hossain Sarker
          </motion.h1>
          
          <div className="space-y-2">
            {["Technical Specialist", "Professional Driver"].map((text, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="block text-xl md:text-2xl text-teal"
              >
                {text}
              </motion.span>
            ))}
          </div>
          
          <p className="text-lg mb-8 max-w-lg mt-6">
            Experienced professional with expertise in electrical systems, construction, 
            and technical maintenance. Licensed driver with comprehensive skills in 
            both light vehicles and motorcycles.
          </p>
          
          <motion.a
            href="mailto:hossain.sarker@example.com"
            className="inline-block w-full md:w-auto px-8 py-4 bg-mint text-navy font-semibold rounded-md hover:bg-teal transition-all duration-300 text-center"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center justify-center">
              Contact Me
              <Mail size={16} className="ml-2" />
            </span>
          </motion.a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-teal/20 overflow-hidden border-4 border-teal">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1748584572/WhatsApp_Image_2025-05-14_at_14.32.23_gjwamo.jpg" 
              alt="Hossain Sarker"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;