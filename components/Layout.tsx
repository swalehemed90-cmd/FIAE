
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Publications', path: '/publications' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-fiae-bg/80 backdrop-blur-xl border-b border-fiae-primary/10 z-50 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-4 group" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Institutional Logo Placeholder */}
          <div className="relative w-10 h-10 rounded-full border border-fiae-primary/30 bg-fiae-surface flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-fiae-primary group-hover:shadow-[0_0_15px_rgba(27,174,112,0.2)]">
            <div className="absolute inset-0 border border-dashed border-fiae-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <span className="text-fiae-primary text-xs font-bold relative z-10">LOGO</span>
            {/* Replace the span above with <img src="/path-to-logo.png" className="w-full h-full object-contain" /> once available */}
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-fiae-primary tracking-tighter leading-none group-hover:text-white transition-colors">FIAE</span>
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-[0.05em] leading-tight hidden sm:block">
              Firdaous Initiative for Academic Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-fiae-primary ${
                location.pathname === link.path ? 'text-fiae-primary' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-fiae-primary text-[#050508] px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(27,174,112,0.3)] transition-all duration-300"
          >
            Get Involved
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-fiae-primary transition-all ${isMobileMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-fiae-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-fiae-primary transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-fiae-bg z-40 md:hidden flex flex-col p-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold transition-colors ${
                  location.pathname === link.path ? 'text-fiae-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-fiae-primary text-[#050508] p-4 rounded-xl font-bold text-center"
            >
              Get Involved
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 pb-12 border-b border-white/5">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-fiae-primary/30 flex items-center justify-center text-[8px] font-bold text-fiae-primary">LOGO</div>
                <span className="text-2xl font-bold text-fiae-primary">FIAE</span>
             </div>
             <p className="text-fiae-textTertiary text-sm max-w-[300px] text-center md:text-left">
               Advancing Academic Excellence, Peace, and Justice across the African continent.
             </p>
          </div>
          
          <div className="flex gap-8 md:gap-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-white text-sm font-semibold uppercase tracking-widest">Platform</span>
              <Link to="/about" className="text-fiae-textSecondary hover:text-fiae-primary text-sm transition-colors">About</Link>
              <Link to="/programs" className="text-fiae-textSecondary hover:text-fiae-primary text-sm transition-colors">Programs</Link>
              <Link to="/publications" className="text-fiae-textSecondary hover:text-fiae-primary text-sm transition-colors">Publications</Link>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-white text-sm font-semibold uppercase tracking-widest">Connect</span>
              <Link to="/events" className="text-fiae-textSecondary hover:text-fiae-primary text-sm transition-colors">Events</Link>
              <Link to="/contact" className="text-fiae-textSecondary hover:text-fiae-primary text-sm transition-colors">Contact</Link>
              <Link to="/admin/login" className="text-fiae-textTertiary hover:text-fiae-primary text-[10px] font-bold uppercase tracking-widest transition-colors mt-4">Admin Portal</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 text-fiae-textTertiary text-xs uppercase tracking-widest">
          <span className="text-center">© 2026 Firdaous Initiative for Academic Excellence</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-fiae-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-fiae-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-fiae-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-fiae-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
