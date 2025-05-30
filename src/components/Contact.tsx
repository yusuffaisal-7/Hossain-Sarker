import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-navy py-16 md:py-24 text-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-mint mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-cream rounded-lg"
              >
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-mint" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Phone</h3>
                <a href="tel:+8801234567890" className="text-teal hover:text-navy transition-colors">
                  +880 1234 567890
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-cream rounded-lg"
              >
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-mint" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
                <a href="mailto:hossain.sarker@example.com" className="text-teal hover:text-navy transition-colors">
                  hossain.sarker@example.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-cream rounded-lg"
              >
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-mint" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Location</h3>
                <p className="text-teal text-center">
                  Alirtek, Sarker Bari,<br />
                  Narayanganj Sadar, 1421
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <motion.a
                href="mailto:hossain.sarker@example.com"
                className="inline-flex items-center px-8 py-4 bg-navy text-cream rounded-lg font-semibold hover:bg-teal transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2" />
                Send Email
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;