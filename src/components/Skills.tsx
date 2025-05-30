import React from 'react';
import { Zap, Fan, Thermometer, PenTool as Tool, Wrench, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  delay: number;
}

const Skill: React.FC<SkillProps> = ({ name, level, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex items-center mb-2">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 rounded-full bg-navy flex items-center justify-center mr-3"
        >
          {icon}
        </motion.div>
        <h3 className="font-semibold text-lg text-navy">{name}</h3>
      </div>
      <div className="h-4 bg-white rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full bg-mint rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Electrical Wiring', level: 95, icon: <Zap className="text-mint" /> },
    { name: 'Air Conditioning', level: 90, icon: <Fan className="text-mint" /> },
    { name: 'HVAC Systems', level: 85, icon: <Thermometer className="text-mint" /> },
    { name: 'Maintenance', level: 95, icon: <Tool className="text-mint" /> },
    { name: 'Construction', level: 80, icon: <Wrench className="text-mint" /> },
    { name: 'Plumbing', level: 75, icon: <Droplet className="text-mint" /> },
  ];

  const certifications = [
    "ITE Skills Certificate in Electrical Wiring",
    "Skills Evaluation Certificate in Concreting",
    "Certificate in Community Emergency Preparedness",
    "ITE Skills Certificate in Health Care",
    "Certificate in IT Office Package",
    "ITE Skills Certificate in Air-Conditioning"
  ];

  return (
    <section id="skills" className="bg-teal py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-cream mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-navy mb-8">Expertise</h3>
            <div>
              {skills.map((skill, index) => (
                <Skill 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/3 bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-navy mb-6">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="flex items-center"
                >
                  <div className="w-3 h-3 rounded-full bg-mint mr-3"></div>
                  <span className="text-gray-800">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;