
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPublications } from '../store';
import { Publication } from '../types';

const Publications: React.FC = () => {
  const [pubs, setPubs] = useState<Publication[]>([]);

  useEffect(() => {
    setPubs(getPublications());
  }, []);

  return (
    <div className="py-[120px] px-6 max-w-[1000px] mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="text-[3.5rem] font-bold mb-4">Research & Publications</h1>
        <p className="text-fiae-textSecondary text-xl">
          Leading scholarly contributions to the fields of law, policy, and humanitarian affairs in Africa.
        </p>
      </div>

      <div className="space-y-6">
        {pubs.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={`/publications/${pub.id}`}
              className="block group p-8 bg-fiae-cardBg border border-fiae-cardBorder rounded-2xl hover:border-fiae-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 bg-fiae-blue/10 text-fiae-blue rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                    {pub.theme}
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-fiae-primary transition-colors">{pub.title}</h3>
                  <p className="text-fiae-textSecondary leading-relaxed mb-6">{pub.abstract}</p>
                  <div className="flex items-center gap-4 text-xs text-fiae-textTertiary font-bold uppercase tracking-widest">
                    <span>{pub.author}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{pub.date}</span>
                  </div>
                </div>
                <div className="whitespace-nowrap flex items-center gap-2 text-fiae-primary font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all pt-2 md:pt-0">
                  Read More <span className="text-xl">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;