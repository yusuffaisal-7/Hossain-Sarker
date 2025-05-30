import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Download, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import BCA_CON from './attached_pdf/BCA_Concreting.pdf';
import ITE_ELECTRICAL from './attached_pdf/ITE_Electrical_Wiring.pdf';
import ITE_HEL from './attached_pdf/ITE_Health_Care-Home_Care.pdf';
import SCDF_CEPP from './attached_pdf/SCDF_CEPP.pdf';
import ITE_RES_AIR from './attached_pdf/ITE_Residential_Air-Conditioning_Certificate.pdf';
import JBS_IT_OFFICE from './attached_pdf/JBS_IT_Office Package-Basic.pdf';
import JAMIYAH_CERT from './attached_pdf/Jamiyah_Best_Promosing_Dept.pdf';

interface Certificate {
  title: string;
  institution: string;
  year: string;
  description: string;
  pdfUrl: string;
  previewUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "BCA Concreting",
    institution: "Building and Construction Authority",
    year: "2002",
    description: "Specialized certification in Concreting, issued on 28 Nov 2002.",
    pdfUrl: BCA_CON,
    previewUrl: BCA_CON
  },
  {
    title: "ITE Electrical Wiring",
    institution: "Institute of Technical Education Singapore",
    year: "2004",
    description: "Specialized certification in Electrical Wiring, issued on 17 Dec 2004.",
    pdfUrl: ITE_ELECTRICAL,
    previewUrl: ITE_ELECTRICAL
  },
  {
    title: "ITE Health Care - Home Care",
    institution: "Institute of Technical Education Singapore",
    year: "2006",
    description: "Specialized certification in Health Care - Home Care, issued on 10 Feb 2006.",
    pdfUrl: ITE_HEL,
    previewUrl: ITE_HEL
  },
  {
    title: "SCDF Community Emergency Preparedness Programme",
    institution: "Singapore Civil Defence Force",
    year: "2005",
    description: "Certificate in Community Emergency Preparedness Programme, issued on 04 Jan 2005.",
    pdfUrl: SCDF_CEPP,
    previewUrl: SCDF_CEPP
  },
  {
    title: "ITE Residential Air-Conditioning",
    institution: "Institute of Technical Education Singapore",
    year: "2010",
    description: "Specialized certification in Residential Air-Conditioning, issued on 29 Dec 2010.",
    pdfUrl: ITE_RES_AIR,
    previewUrl: ITE_RES_AIR
  },
  {
    title: "JBS IT Office Package (Basic)",
    institution: "Jamiyah Business School",
    year: "2009",
    description: "Certificate in IT Office Package (Basic), issued on 12 Jun 2008.",
    pdfUrl: JBS_IT_OFFICE,
    previewUrl: JBS_IT_OFFICE
  },
  {
    title: "Certificate of Achievement",
    institution: "Jamiyah Maintenance Department",
    year: "2017",
    description: "Certificate of Achievement for outstanding performance.",
    pdfUrl: JAMIYAH_CERT,
    previewUrl: JAMIYAH_CERT
  },
];

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg h-full flex flex-col p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-navy mb-3">{certificate.title}</h3>
        <p className="text-teal mb-3">{certificate.institution}</p>
        <p className="text-gray-600 mb-4">{certificate.description}</p>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-sm text-navy bg-mint/20 px-3 py-1 rounded-full">
            {certificate.year}
          </span>
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-navy hover:text-teal transition-colors"
              onClick={() => window.open(certificate.previewUrl, '_blank')}
            >
              <Eye size={18} className="mr-1" />
              <span className="text-sm">Preview</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-navy hover:text-teal transition-colors"
              onClick={() => window.open(certificate.pdfUrl, '_blank')}
            >
              <Download size={18} className="mr-1" />
              <span className="text-sm">Download</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="bg-mint py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-navy mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;