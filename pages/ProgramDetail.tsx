
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getSessions } from '../store';
import { ProgramSession } from '../types';

const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="mt-8 rounded-2xl overflow-hidden border border-fiae-cardBorder bg-black aspect-video shadow-2xl group relative">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="opacity-90 group-hover:opacity-100 transition-opacity"
    ></iframe>
  </div>
);

const MomentsMarquee: React.FC = () => {
  const images = Array.from({ length: 20 }, (_, i) => i + 1);
  
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-fiae-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-fiae-bg to-transparent z-10" />
      
      <motion.div 
        className="flex gap-6 w-max"
        animate={{ x: [0, -1920] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...images, ...images].map((i, idx) => (
          <div 
            key={idx} 
            className="w-[300px] h-[400px] flex-shrink-0 rounded-2xl border border-fiae-cardBorder bg-fiae-surface/40 overflow-hidden relative group"
          >
            <div className="absolute inset-0 border-2 border-dashed border-fiae-primary/10 m-3 rounded-xl group-hover:border-fiae-primary/30 transition-colors" />
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-12 h-12 rounded-full border border-fiae-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-fiae-primary text-[10px] font-bold">#{i}</span>
              </div>
              <span className="text-fiae-textTertiary uppercase font-bold tracking-[0.2em] text-[10px] group-hover:text-fiae-primary/60 transition-colors">
                Moment of Hope
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const programData: Record<string, any> = {
  '1': {
    tag: 'INTERNATIONAL LAW',
    title: 'International Humanitarian Law Moot Court Competition',
    description: 'A prestigious pan-African academic competition.',
    longDescription: ["Mastery of Geneva Conventions...", "Networking..."],
    meta: 'Annual • Pan-African',
    outcomes: ['30+ Participating Universities'],
    hasSubMenus: true,
    tabs: [{ id: 'overview', label: 'Overview' }, { id: 'history', label: 'Previous Editions' }],
    history: [{ year: '2025', edition: 'Fourth Edition', description: 'Major milestone.' }]
  },
  '2': {
    tag: 'PEACE & SECURITY',
    title: 'Africa Youth Peace Summit',
    description: 'Transformative gathering for security challenges.',
    longDescription: ["Addressing poverty...", "Contemporary conflicts..."],
    meta: 'Youth • Policy • Advocacy',
    outcomes: ['Youth Policy Declaration'],
    hasSubMenus: true,
    tabs: [{ id: 'overview', label: 'Overview' }, { id: 'history', label: 'Previous Summits' }],
    history: [{ year: '6th', edition: 'Sixth Edition', youtubeId: 'N3FEdTwKL0w' }]
  },
  '3': {
    tag: 'SCHOLARSHIP',
    title: 'Late J.S Ajiboye Scholarship',
    description: 'Empowering young minds.',
    longDescription: ["Access to education...", "Breaking cycle of poverty..."],
    quote: { text: "Investing in leaders...", author: "Dr. Foluke M. Ajiboye" },
    meta: 'Merit-based • Primary & Secondary',
    outcomes: ['Tuition Coverage'],
    hasSubMenus: true,
    tabs: [{ id: 'overview', label: 'About' }, { id: 'recipients', label: 'Recipients' }, { id: 'moments', label: 'Moments' }],
    history: [{ year: 'Current', edition: 'St. Joseph School', description: 'Active cycle.' }]
  },
  '5': {
    tag: 'LEADERSHIP & DIALOGUE',
    title: 'FIAE One on One',
    description: 'Scholarly interview sessions.',
    longDescription: ["Flagship intellectual engagement...", "Held every last Sunday..."],
    meta: 'Monthly • Scholarly Interview',
    outcomes: ['Scholarly Network'],
    hasSubMenus: true,
    tabs: [{ id: 'overview', label: 'Overview' }, { id: 'sessions', label: 'Monthly Sessions' }],
  },
  '6': {
    tag: 'CONTEMPORARY ISSUES',
    title: 'Webinar Series',
    description: 'Digital forums on emerging trends.',
    longDescription: ["Digital platform for real-time engagement...", "Interactive formats..."],
    meta: 'Regular • Virtual Forums',
    outcomes: ['Global Expert Access'],
    hasSubMenus: true,
    tabs: [{ id: 'overview', label: 'Overview' }, { id: 'sessions', label: 'Past Webinars' }],
  }
};

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = programData[id || '1'] || programData['1'];
  const [activeTab, setActiveTab] = useState('overview');
  const [sessions, setSessions] = useState<ProgramSession[]>([]);

  useEffect(() => {
    if (id === '5' || id === '6') {
      setSessions(getSessions().filter(s => s.programId === id));
    }
  }, [id]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/programs" className="text-fiae-primary hover:text-white transition-colors mb-8 inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
          <span className="text-lg">←</span> Back to Programs
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-10 items-start mt-12 relative">
          <aside className="lg:w-64 w-full lg:sticky lg:top-32 z-20 space-y-6">
            <div className="bg-fiae-surface border border-fiae-cardBorder rounded-2xl p-6 shadow-xl">
              <h3 className="text-fiae-textTertiary font-bold uppercase text-[10px] tracking-widest mb-6 border-b border-white/5 pb-2">Navigation</h3>
              <nav className="flex flex-col gap-3">
                {program.tabs.map((tab: any) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === tab.id ? 'text-fiae-primary bg-fiae-primary/10 border-l-2 border-fiae-primary' : 'text-fiae-textSecondary hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-grow w-full z-10">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-fiae-primary/10 text-fiae-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                {program.tag}
              </span>
              <h1 className="text-[3rem] md:text-[4rem] font-bold leading-tight mb-8 text-white">{program.title}</h1>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-12">
                    <div className="space-y-6 text-xl text-fiae-textSecondary leading-relaxed">
                      {program.longDescription?.map((p: string, i: number) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                )}

                {activeTab === 'sessions' && (
                  <div className="space-y-24">
                    {sessions.length > 0 ? sessions.map(session => (
                      <div key={session.id} className="relative pl-12 border-l border-fiae-primary/20">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-fiae-primary" />
                        <div className="mb-6">
                          <span className="text-fiae-primary font-bold text-4xl block mb-2">{session.date}</span>
                          <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{session.title}</h3>
                        </div>
                        <p className="text-lg text-fiae-textSecondary mb-8">{session.description}</p>
                        {session.youtubeId && <YouTubeEmbed videoId={session.youtubeId} title={session.title} />}
                      </div>
                    )) : (
                      <div className="p-20 text-center border border-dashed border-white/10 rounded-3xl">
                        <p className="text-fiae-textTertiary uppercase tracking-widest font-bold">New sessions coming soon.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'moments' && <MomentsMarquee />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramDetail;