import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-24 h-1 bg-mint mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-navy mb-4">Professional Journey</h3>
            <p className="text-gray-800 mb-6 leading-relaxed">
              My career spans more than two decades, starting in Singapore where I worked 
              in various roles at Jamiyah organizations, progressing from housekeeping to 
              specialized maintenance positions.
            </p>
            <p className="text-gray-800 mb-6 leading-relaxed">
              With a foundation in electrical systems, air conditioning, and general maintenance,
              I've developed a comprehensive skill set that allows me to solve complex technical problems
              and manage teams effectively.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Now as an Assistant Manager in a textile company in Bangladesh, I combine my technical
              expertise with management skills to oversee maintenance operations and improve facility efficiency.
            </p>
          </div>
          
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-navy mb-6">Personal Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-mint mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Location</h4>
                  <p className="text-gray-700">Bangladesh (Previously Singapore)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-mint mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <p className="text-gray-700">hossain.abdul@yahoo.com.sg || hsarkersalina@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-mint mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Phone</h4>
                  <p className="text-gray-700">+880 1685648316 || +880 1736578225</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="text-mint mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy">Languages</h4>
                  <p className="text-gray-700">English, Bengali, Malay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;