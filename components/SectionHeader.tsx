
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[2.5rem] font-semibold leading-tight mb-4">
          {title}
        </h2>
        <div className={`h-1 w-24 bg-fiae-gold rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
        {subtitle && (
          <p className="text-fiae-textSecondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
