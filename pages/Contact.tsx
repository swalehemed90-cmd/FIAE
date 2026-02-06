
import React from 'react';
import { motion } from 'framer-motion';

const offices = [
  {
    country: "Nigeria",
    address: "15, Ayedaade Community, Behind Poultry, Okinni, Osun State, Nigeria",
    phone: "+2347013332890",
    email: "info@firdaouscentre.org"
  },
  {
    country: "Kenya",
    address: "Amrutha Apartment, Room A3, Second Floor, Brookside Drive, Westlands, Nairobi",
    phone: "+254721416806",
    email: "mumo@firdaouscentre.org"
  },
  {
    country: "Zambia",
    address: "Lusaka",
    phone: "+260975308911",
    email: "chitindi@firdaouscentre.org"
  },
  {
    country: "Uganda",
    address: "Ggabba Road, Opposite Kampala International University, Kampala",
    phone: "+256703689355",
    email: "adeke@firdaouscentre.org"
  },
  {
    country: "Rwanda",
    address: "Kigali",
    phone: "+254721416806",
    email: "mumo@firdaouscentre.org"
  },
  {
    country: "South Sudan",
    address: "MAKA PLAZA, 2nd Floor, Room 10 Konyokonyo, Juba-South Sudan",
    phone: "+211924651679",
    email: "duom@firdaouscentre.org"
  },
  {
    country: "Tanzania",
    address: "Dar es salam",
    phone: "+254721416806",
    email: "mumo@firdaouscentre.org"
  },
  {
    country: "Ethiopia",
    address: "Bole, Behind DH geda tower, Afomi Building, Addis Ababa",
    phone: "+251920603071",
    email: "shibru@firdaouscentre.org"
  }
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[3rem] md:text-[4rem] font-bold mb-6 tracking-tight"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-fiae-textSecondary text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Give us a call, email us, or come and visit us in one of our offices across the continent.
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
        
        {/* Contact Form Container */}
        <div className="lg:col-span-7 bg-fiae-surface border border-fiae-primary/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fiae-primary/5 blur-[80px] -z-10" />
          
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-fiae-primary rounded-full" />
            Send a Message
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-[400px] flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-fiae-primary rounded-full flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-[#050508]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Message Received</h2>
              <p className="text-fiae-textSecondary">Our secretariat will respond within 48 business hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Institutional contact name..."
                    className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-primary transition-colors text-white placeholder:text-white/20 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="contact@institution.org"
                    className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-primary transition-colors text-white placeholder:text-white/20 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Subject of Inquiry</label>
                <select className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-primary transition-colors text-white outline-none appearance-none cursor-pointer">
                  <option>General Institutional Inquiry</option>
                  <option>Moot Court Competition</option>
                  <option>Scholarship Inquiry</option>
                  <option>Peace Summit Participation</option>
                  <option>Research Collaboration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can FIAE support your academic or humanitarian goals?"
                  className="w-full bg-fiae-bg border border-white/10 rounded-xl px-5 py-4 focus:border-fiae-primary transition-colors text-white placeholder:text-white/20 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-fiae-primary text-[#050508] rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(27,174,112,0.3)] transition-all duration-300"
              >
                Dispatch Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="p-8 bg-fiae-surface/40 border border-white/5 rounded-3xl">
            <h3 className="text-fiae-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Central Secretariat</h3>
            <div className="space-y-6">
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:info@firdaouscentre.org" className="text-2xl font-bold hover:text-fiae-primary transition-colors">info@firdaouscentre.org</a>
              </div>
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Primary Phone</div>
                <div className="text-2xl font-bold">+234 701 333 2890</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-fiae-primary/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 bg-fiae-cardBg border border-fiae-cardBorder rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Continental Partnerships</h3>
              <p className="text-fiae-textSecondary leading-relaxed">
                We are constantly expanding our presence. If you wish to host a FIAE program or establish an institutional partnership in your region, please reach out via the central secretariat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Offices Directory */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">Regional Presence</h2>
          <div className="flex-grow h-[1px] bg-white/5" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 bg-fiae-surface border border-white/5 rounded-2xl hover:border-fiae-primary/20 transition-all group"
            >
              <h4 className="text-fiae-primary font-bold text-lg mb-4 group-hover:translate-x-1 transition-transform">{office.country}</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 mt-1 text-fiae-textTertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p className="text-fiae-textSecondary text-xs leading-relaxed">{office.address}</p>
                </div>
                <div className="space-y-2">
                  <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-fiae-textTertiary hover:text-fiae-primary transition-colors text-[11px] font-bold uppercase tracking-widest">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-fiae-textTertiary hover:text-fiae-primary transition-colors text-[11px] font-bold uppercase tracking-widest">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {office.email.split('@')[0]}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
