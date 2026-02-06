
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const values = [
  "Academic Excellence",
  "Peace & Security",
  "Rule of Law",
  "Human Dignity"
];

const About: React.FC = () => {
  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h1 className="text-[4.5rem] font-bold leading-tight mb-4">About FIAE</h1>
        <p className="text-2xl text-fiae-gold/80 font-medium">Committed to Academic Excellence and Justice in Africa</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 border-2 border-dashed border-fiae-gold/30 rounded-3xl" />
          <div className="absolute inset-8 bg-fiae-cardBg border border-fiae-gold/10 rounded-2xl flex items-center justify-center overflow-hidden">
             <div className="text-fiae-textTertiary uppercase tracking-[0.3em] font-bold">Institutional Image</div>
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050508] to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-fiae-gold/10 blur-[60px] rounded-full -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-gold/20 pb-2 inline-block">Our Mission</h2>
            <p className="text-lg text-fiae-textSecondary leading-relaxed">
              To empower African students, scholars, and institutions through world-class academic initiatives, legal training, and humanitarian engagement, fostering a continent defined by excellence, justice, and sustainable peace.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-gold/20 pb-2 inline-block">Our Vision</h2>
            <p className="text-lg text-fiae-textSecondary leading-relaxed">
              A vibrant Africa where intellectual growth meets social justice, and where every academic endeavor contributes directly to the betterment of humanity and the rule of law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-gold/20 pb-2 inline-block">Core Values</h2>
            <div className="flex flex-wrap gap-4">
              {values.map((val) => (
                <span
                  key={val}
                  className="px-6 py-3 bg-fiae-gold/5 border border-fiae-gold/20 rounded-full text-fiae-gold font-bold uppercase text-xs tracking-widest"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[120px] p-12 bg-fiae-cardBg border border-fiae-gold/10 rounded-[40px] text-center">
         <h3 className="text-3xl font-bold mb-8">A Continental Legacy</h3>
         <p className="text-fiae-textSecondary max-w-3xl mx-auto leading-relaxed text-lg">
           FIAE has grown from a specialized student initiative into a continental force for academic and humanitarian excellence. Our programs bridge the gap between classroom theory and real-world policy, ensuring that the next generation of African leaders is equipped with both the knowledge and the ethical framework to lead.
         </p>
      </div>
    </div>
  );
};

export default About;
