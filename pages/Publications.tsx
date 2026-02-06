
import React from 'react';
import { motion } from 'framer-motion';
import { Publication } from '../types';

const publications: Publication[] = [
  {
    id: '1',
    title: 'The Evolution of IHL in Post-Conflict Africa',
    abstract: 'A comprehensive analysis of how international humanitarian law frameworks have adapted to contemporary non-international armed conflicts on the continent.',
    theme: 'IHL'
  },
  {
    id: '2',
    title: 'Digital Governance and Electoral Integrity',
    abstract: 'Exploring the impact of social media and digital surveillance on democratic processes in emerging African economies.',
    theme: 'Elections'
  },
  {
    id: '3',
    title: 'Gender-Based Violence in Conflict Settings',
    abstract: 'Policy recommendations for improving judicial accountability for conflict-related sexual violence.',
    theme: 'Gender'
  },
  {
    id: '4',
    title: 'Climate Resilience and Human Security',
    abstract: 'Analyzing the intersection between environmental degradation and regional security threats in the Sahel.',
    theme: 'Climate'
  },
  {
    id: '5',
    title: 'Regional Economic Integration and Law',
    abstract: 'Evaluating legal barriers to the full implementation of the African Continental Free Trade Area (AfCFTA).',
    theme: 'Governance'
  }
];

const Publications: React.FC = () => {
  return (
    <div className="py-[120px] px-6 max-w-[1000px] mx-auto">
      <div className="mb-20">
        <h1 className="text-[3.5rem] font-bold mb-4">Research & Publications</h1>
        <p className="text-fiae-textSecondary text-xl">
          Leading scholarly contributions to the fields of law, policy, and humanitarian affairs in Africa.
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 bg-fiae-cardBg border border-fiae-cardBorder rounded-2xl hover:border-fiae-gold/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-grow">
                <span className="inline-block px-3 py-1 bg-fiae-blue/10 text-fiae-blue rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                  {pub.theme}
                </span>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-fiae-gold transition-colors">{pub.title}</h3>
                <p className="text-fiae-textSecondary leading-relaxed mb-6">{pub.abstract}</p>
              </div>
              <button className="whitespace-nowrap flex items-center gap-2 text-fiae-gold font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all pt-2 md:pt-0">
                Read Publication <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
