import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-cream pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Hossain</h3>
            <p className="max-w-xs text-cream/70 mb-6">
              Assistant Manager and Technical Specialist with extensive experience in maintenance and facility management.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="mailto:hsarkersalina@gmail.com" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center hover:bg-mint transition-colors duration-300"
              >
                <Mail size={18} className="text-cream" />
              </motion.a>
              <motion.a 
                href="tel:+8801736578825" 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center hover:bg-mint transition-colors duration-300"
              >
                <Phone size={18} className="text-cream" />
              </motion.a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#about" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300"
                  >
                    About
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#skills" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300"
                  >
                    Skills
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#experience" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300"
                  >
                    Experience
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#education" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300"
                  >
                    Education
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#contact" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300"
                  >
                    Contact
                  </motion.a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="https://wa.me/8801736578825" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-mint transition-colors duration-300 flex items-center"
                  >
                    WhatsApp
                    <ExternalLink size={14} className="ml-1" />
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="mailto:hsarkersalina@gmail.com" 
                    className="text-cream/70 hover:text-mint transition-colors duration-300 flex items-center"
                  >
                    Email
                    <ExternalLink size={14} className="ml-1" />
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-6 mt-8 text-center">
          <p className="text-cream/50 text-sm">&copy; {currentYear} Hossain. All rights reserved.</p>
          <p className="text-cream/30 text-xs mt-2">
            Made by{' '}
            <a 
              href="https://yusuf-faisal.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors duration-300"
            >
              Yusuf Faisal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;