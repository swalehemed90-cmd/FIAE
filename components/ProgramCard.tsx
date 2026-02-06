
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={`/programs/${program.id}`}
        className="block group relative p-8 bg-fiae-cardBg border border-fiae-cardBorder rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden h-full"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="w-12 h-12 bg-fiae-gold rounded-full blur-2xl" />
        </div>
        
        <span className="inline-block px-3 py-1 rounded-full bg-fiae-gold/10 text-fiae-gold text-[10px] font-bold uppercase tracking-widest mb-6">
          {program.tag}
        </span>
        
        <h3 className="text-[1.5rem] font-semibold text-white mb-4 group-hover:text-fiae-gold transition-colors">
          {program.title}
        </h3>
        
        <p className="text-fiae-textSecondary mb-8 line-clamp-3">
          {program.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <span className="text-xs font-medium text-fiae-textTertiary uppercase tracking-wider">
            {program.meta}
          </span>
          <span className="text-fiae-gold text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
            Learn More <span className="text-lg">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;
