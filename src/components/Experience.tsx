import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  description,
  isLast = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-10"
    >
      {!isLast && (
        <div className="absolute left-3 top-0 h-full w-0.5 bg-navy opacity-30"></div>
      )}
      
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-mint border-4 border-navy flex items-center justify-center">
        <Briefcase size={12} className="text-navy" />
      </div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <h4 className="text-teal font-medium mb-4">{company}</h4>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Assistant Manager",
      company: "Family Textile Business",
      description: "Oversee maintenance operations, manage technical teams, and implement efficient systems for the textile production facility. Responsible for equipment maintenance, electrical systems, and facility management."
    },
    {
      title: "Maintenance Technician",
      company: "Jamiyah Headquarters",
      description: "Handled all aspects of building maintenance including electrical systems, air conditioning, and general repairs. Responsible for preventative maintenance schedules and emergency repairs across multiple facilities."
    },
    {
      title: "Maintenance Staff",
      company: "Jamiyah Children Home",
      description: "Provided maintenance services for children's facility, ensuring safe and functional environment. Responsible for electrical work, basic plumbing, and general upkeep of the premises."
    },
    {
      title: "Housekeeping Staff",
      company: "Jamiyah Home for the Aged",
      description: "Started career in facilities management, handling housekeeping duties while learning basic maintenance skills. Acquired foundational knowledge in building operations and maintenance procedures."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-mint mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;