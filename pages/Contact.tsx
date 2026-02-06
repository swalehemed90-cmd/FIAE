
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-[4rem] font-bold mb-6">Contact FIAE</h1>
        <p className="text-fiae-textSecondary text-xl max-w-2xl mx-auto">
          Reach out to our secretariat for inquiries regarding programs, partnerships, or academic support.
        </p>
      </div>

      <div className="max-w-[700px] mx-auto bg-fiae-surface border border-fiae-gold/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fiae-gold/5 blur-[80px] -z-10" />
        
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[400px] flex flex-col items-center justify-center text-center"
          >
            <div className="w-20 h-20 bg-fiae-gold rounded-full flex items-center justify-center mb-8">
              <svg className="w-10 h-10 text-[#050508]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
            <p className="text-fiae-textSecondary">We will get back to you within 48 business hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-fiae-gold uppercase tracking-widest">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Prof. John Doe"
                  className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-gold transition-colors text-white placeholder:text-white/20 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-fiae-gold uppercase tracking-widest">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@university.edu.ng"
                  className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-gold transition-colors text-white placeholder:text-white/20 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-fiae-gold uppercase tracking-widest">Subject of Inquiry</label>
              <select className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-gold transition-colors text-white outline-none appearance-none">
                <option>Programs & Competitions</option>
                <option>Partnerships & Institutional Support</option>
                <option>Publications & Research</option>
                <option>Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-fiae-gold uppercase tracking-widest">Your Message</label>
              <textarea
                required
                rows={5}
                placeholder="How can we collaborate or assist you?"
                className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-gold transition-colors text-white placeholder:text-white/20 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-fiae-gold text-[#050508] rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="mt-20 text-center">
        <p className="text-fiae-textTertiary mb-4">Direct Communication</p>
        <a 
          href="mailto:info@firdaouscentre.org" 
          className="text-2xl font-bold text-fiae-gold hover:underline underline-offset-8 transition-all"
        >
          info@firdaouscentre.org
        </a>
      </div>
    </div>
  );
};

export default Contact;
