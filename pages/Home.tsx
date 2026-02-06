
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import SectionHeader from '../components/SectionHeader';
import { Program } from '../types';

const floatingItems = [
  { label: 'IHL Moot Court', rotation: -12, delay: 0, top: '10%', left: '5%', z: 30 },
  { label: 'Youth Peace Summit', rotation: 8, delay: 1, top: '15%', left: '55%', z: 20 },
  { label: 'Academic Workshop', rotation: -5, delay: 0.5, top: '45%', left: '10%', z: 40 },
  { label: 'UN Engagement', rotation: 15, delay: 1.5, top: '40%', left: '60%', z: 10 },
  { label: 'Conference Session', rotation: -10, delay: 2, top: '70%', left: '5%', z: 25 },
  { label: 'Student Delegation', rotation: 6, delay: 0.8, top: '75%', left: '50%', z: 35 },
  { label: 'Panel Discussion', rotation: -8, delay: 1.2, top: '30%', left: '30%', z: 15 },
  { label: 'Training Program', rotation: 10, delay: 0.3, top: '60%', left: '35%', z: 50 },
];

const programs: Program[] = [
  {
    id: '1',
    tag: 'INTERNATIONAL LAW',
    title: 'International Humanitarian Law Moot Court Competition',
    description: 'Continental moot court for African law students focusing on armed conflict, protection of civilians, and IHL jurisprudence.',
    meta: 'Annual • Pan-African'
  },
  {
    id: '2',
    tag: 'PEACE & SECURITY',
    title: 'Africa Youth Peace Summit',
    description: 'Platform for youth dialogue, policy engagement, and peacebuilding across Africa.',
    meta: 'Youth • Policy • Advocacy'
  },
  {
    id: '3',
    tag: 'ACADEMIC DEVELOPMENT',
    title: 'Scholarships & Academic Support',
    description: 'Supporting access to education through scholarships and mentorship.',
    meta: 'Merit-based • Inclusive'
  },
  {
    id: '4',
    tag: 'RESEARCH & ADVOCACY',
    title: 'Policy Research & Publications',
    description: 'Evidence-based research on law, governance, elections, climate, and human rights in Africa.',
    meta: 'Reports • Articles • Briefs',
    link: '/publications'
  }
];

const impactStats = [
  { text: 'Students from over 10 African countries have participated in FIAE programs.' },
  { text: 'Recognized for advancing International Humanitarian Law education in Africa.' },
  { text: 'Engagements with universities, civil society, and international institutions.' }
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-fiae-primary/10 border border-fiae-primary/20 mb-8">
              <span className="text-[10px] font-bold text-fiae-primary uppercase tracking-[0.2em]">
                ACADEMIC EXCELLENCE • PEACE • JUSTICE
              </span>
            </div>
            
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
              Advancing <span className="text-fiae-primary">Academic Excellence</span> for a Just and Peaceful Africa
            </h1>
            
            <p className="text-lg text-fiae-textSecondary max-w-[540px] mb-10 leading-relaxed">
              Firdaous Initiative for Academic Excellence is dedicated to empowering African students, scholars, and institutions through education, law, leadership, and humanitarian engagement.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12 text-sm text-fiae-primary font-medium">
              <span>10+ Countries Represented</span>
              <span className="w-1.5 h-1.5 rounded-full bg-fiae-primary/50" />
              <span>Continental Programs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-fiae-primary/50" />
              <span>International Partnerships</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="px-8 py-4 bg-fiae-primary text-[#050508] rounded-xl font-bold text-center hover:shadow-[0_0_30px_rgba(27,174,112,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/publications"
                className="px-8 py-4 bg-transparent border-2 border-fiae-primary text-fiae-primary rounded-xl font-bold text-center hover:bg-fiae-primary/5 hover:shadow-[0_0_20px_rgba(27,174,112,0.1)] transition-all duration-300"
              >
                Read Our Publications
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block relative h-[600px] w-full">
            {floatingItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0]
                }}
                transition={{ 
                  opacity: { delay: item.delay, duration: 0.6 },
                  scale: { delay: item.delay, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }
                }}
                className="absolute p-4 md:p-6 bg-fiae-surface/60 backdrop-blur-xl border border-fiae-primary/20 rounded-xl shadow-2xl"
                style={{ 
                  top: item.top, 
                  left: item.left,
                  rotate: `${item.rotation}deg`,
                  borderStyle: 'dashed',
                  zIndex: item.z
                }}
              >
                <div className="flex flex-col gap-2 min-w-[120px]">
                   <div className="w-full h-24 md:h-28 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-fiae-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="w-8 h-8 rounded-full border-2 border-fiae-primary/30 animate-pulse relative z-10" />
                   </div>
                   <span className="text-[9px] font-bold text-fiae-primary tracking-widest uppercase mt-2 opacity-80">
                     {item.label}
                   </span>
                </div>
              </motion.div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fiae-primary/10 blur-[120px] rounded-full -z-10 animate-glow" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-[120px] px-6 max-w-[1200px] mx-auto">
        <SectionHeader 
          title="Our Flagship Programs" 
          subtitle="Empowering the next generation of African leaders and scholars through specialized academic and professional initiatives."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {programs.map((p, idx) => (
            <ProgramCard key={p.id} program={p} index={idx} />
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-[120px] bg-fiae-surface relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader title="Our Impact" centered={false} />
          <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar">
            {impactStats.map((impact, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: 'rgba(27,174,112,0.4)' }}
                className="min-w-[300px] md:min-w-[400px] p-10 bg-fiae-cardBg border border-fiae-cardBorder rounded-3xl snap-center transition-all duration-300"
              >
                <div className="w-12 h-12 bg-fiae-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-fiae-primary font-bold">0{idx + 1}</span>
                </div>
                <p className="text-xl font-medium leading-relaxed italic text-white/90">
                  "{impact.text}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-fiae-primary" />
                  <span className="text-xs uppercase tracking-widest text-fiae-primary font-bold">Institutional Impact</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[160px] px-6 relative overflow-hidden bg-[#050508]">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[900px] opacity-10 blur-[120px] -z-10" 
          style={{ backgroundImage: 'radial-gradient(circle, #1BAE70 0%, transparent 70%)' }} 
        />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[3rem] md:text-[4rem] font-bold mb-6 tracking-tight leading-none">Join Us in Shaping Africa's Academic Future</h2>
            <p className="text-fiae-textSecondary text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner, participate, or support programs advancing education, peace, and justice. Together, we can build a continental standard of excellence.
            </p>
            
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-fiae-primary text-[#050508] rounded-xl font-bold text-xl hover:shadow-[0_0_50px_rgba(27,174,112,0.5)] hover:scale-[1.05] transition-all duration-300"
            >
              Get Involved with FIAE
            </Link>
            
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-fiae-textTertiary text-[10px] font-bold uppercase tracking-[0.25em]">
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-fiae-primary" /> Transparent</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-fiae-primary" /> Nonprofit</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-fiae-primary" /> Impact-driven</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;