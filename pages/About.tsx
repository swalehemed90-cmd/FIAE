
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const values = [
  "Academic Excellence",
  "Peace & Security",
  "Rule of Law",
  "Human Dignity"
];

const executiveCommittee = [
  { 
    name: "Abdulkareem Azeez", 
    role: "Director of the Initiative",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Swaleh H. Wengo", 
    role: "Ass. Director (Programs)",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Dr. Foluke M. Dare", 
    role: "Asst. Director (Finance)",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Akinwumi John", 
    role: "Ass. Director (Administration)",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
];

const programUnits = [
  { 
    name: "Patrick Muema Mumo", 
    role: "Head Leadership & Governance Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Marvellous Chitindi", 
    role: "Head Gender Equality Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Daniel Duom Kelei", 
    role: "Head Advocacy & Research Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Henock Teshome", 
    role: "Head Social Engagement Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Adeke Mary Joy", 
    role: "Head Peace & Conflict Unit/Media & Communication Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Abdullahi Shafii", 
    role: "Head Technology & AI Unit",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Doris Kendi", 
    role: "Development Manager",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
  { 
    name: "Alessia Tesoro", 
    role: "Intern (Peace & Conflict Unit)",
    image: "https://firdaouscentre.org/wp-content/uploads/2026/01/circle-cropped-6.png" 
  },
];

const LeaderCard = ({ name, role, isExec, image }: { name: string, role: string, isExec?: boolean, image?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`p-6 bg-fiae-cardBg border ${isExec ? 'border-fiae-primary/20' : 'border-white/5'} rounded-2xl group transition-all duration-300 flex items-center justify-between gap-4`}
  >
    <div className="flex-grow">
      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-fiae-primary transition-colors leading-tight">{name}</h4>
      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-fiae-textTertiary group-hover:text-fiae-primary/60 transition-colors leading-relaxed">
        {role}
      </p>
    </div>
    
    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 overflow-hidden relative ${isExec ? 'bg-fiae-primary/10 text-fiae-primary border border-fiae-primary/20 group-hover:border-fiae-primary/40' : 'bg-white/5 text-white/40 border border-white/10 group-hover:bg-fiae-primary/10 group-hover:text-fiae-primary group-hover:border-fiae-primary/20'}`}>
      <div className="absolute inset-0 border-2 border-dashed border-current opacity-20 animate-[spin_10s_linear_infinite]" />
      
      {image ? (
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      ) : (
        <span className="relative z-10">{name.charAt(0)}</span>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-tight mb-4">About FIAE</h1>
        <p className="text-xl md:text-2xl text-fiae-primary/80 font-medium">Committed to Academic Excellence and Justice in Africa</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-[120px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 border-2 border-dashed border-fiae-primary/30 rounded-3xl" />
          <div className="absolute inset-8 bg-fiae-cardBg border border-fiae-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
             <div className="text-fiae-textTertiary uppercase tracking-[0.3em] font-bold">Institutional Image</div>
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050508] to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-fiae-primary/10 blur-[60px] rounded-full -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-primary/20 pb-2 inline-block">Our Mission</h2>
            <p className="text-lg text-fiae-textSecondary leading-relaxed">
              To empower African students, scholars, and institutions through world-class academic initiatives, legal training, and humanitarian engagement, fostering a continent defined by excellence, justice, and sustainable peace.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-primary/20 pb-2 inline-block">Our Vision</h2>
            <p className="text-lg text-fiae-textSecondary leading-relaxed">
              A vibrant Africa where intellectual growth meets social justice, and where every academic endeavor contributes directly to the betterment of humanity and the rule of law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-fiae-primary/20 pb-2 inline-block">Core Values</h2>
            <div className="flex flex-wrap gap-4">
              {values.map((val) => (
                <span
                  key={val}
                  className="px-6 py-3 bg-fiae-primary/5 border border-fiae-primary/20 rounded-full text-fiae-primary font-bold uppercase text-xs tracking-widest"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leadership Section */}
      <section className="mb-[120px] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-fiae-primary/5 blur-[120px] rounded-full -z-10 opacity-30" />
        
        <SectionHeader 
          title="Our Leadership" 
          subtitle="A continental network of experts, scholars, and advocates dedicated to the FIAE mission."
          centered={true}
        />

        <div className="space-y-20">
          <div>
            <h3 className="text-xs font-bold text-fiae-primary uppercase tracking-[0.4em] mb-12 text-center border-b border-fiae-primary/10 pb-4">Executive Committee</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {executiveCommittee.map((leader, i) => (
                <LeaderCard key={i} {...leader} isExec={true} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-fiae-textTertiary uppercase tracking-[0.4em] mb-12 text-center border-b border-white/5 pb-4">Program Units</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {programUnits.map((leader, i) => (
                <LeaderCard key={i} {...leader} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="p-12 bg-fiae-cardBg border border-fiae-primary/10 rounded-[40px] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-fiae-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
         <h3 className="text-3xl font-bold mb-8 relative z-10">A Continental Legacy</h3>
         <p className="text-fiae-textSecondary max-w-3xl mx-auto leading-relaxed text-lg relative z-10">
           FIAE has grown from a specialized student initiative into a continental force for academic and humanitarian excellence. Our programs bridge the gap between classroom theory and real-world policy, ensuring that the next generation of African leaders is equipped with both the knowledge and the ethical framework to lead.
         </p>
      </div>
    </div>
  );
};

export default About;
