
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const programData: Record<string, any> = {
  '1': {
    tag: 'INTERNATIONAL LAW',
    title: 'International Humanitarian Law Moot Court Competition',
    description: 'A prestigious pan-African academic competition that challenges law students to engage with complex legal issues arising in armed conflicts. Participants simulate real-world legal proceedings before international courts, arguing cases that involve the protection of civilians, prisoners of war, and the prosecution of war crimes.',
    longDescription: [
      "The FIAE IHL Moot Court Competition is the largest continental platform for future international lawyers. Every year, teams from leading African universities gather to demonstrate their mastery of the Geneva Conventions and Additional Protocols.",
      "Beyond the competition, participants attend specialized seminars led by international jurists and humanitarian experts. This initiative has been instrumental in mainstreaming IHL into the curricula of law schools across Africa, ensuring that the next generation of legal practitioners is prepared to uphold humanitarian standards.",
      "The competition culminates in a grand final judged by eminent figures from international tribunals and supreme courts, offering students unparalleled networking and professional development opportunities."
    ],
    meta: 'Annual • Pan-African',
    outcomes: ['30+ Participating Universities', '500+ Alumni across Africa', 'Academic credit recognition'],
  },
  '2': {
    tag: 'PEACE & SECURITY',
    title: 'Africa Youth Peace Summit',
    description: 'A transformative gathering of young leaders, peacebuilders, and policymakers from across Africa. The summit focuses on the role of youth in conflict resolution, policy advocacy, and community resilience.',
    longDescription: [
      "The Africa Youth Peace Summit is a cornerstone of FIAE's commitment to the UN Security Council Resolution 2250 on Youth, Peace, and Security. It serves as a laboratory for peace, where young changemakers co-design solutions to regional stability challenges.",
      "The summit features high-level panels, skills-based workshops, and collaborative 'peace-thons' where delegates develop actionable peacebuilding projects for their local communities.",
      "Key outcomes from the summit are compiled into a 'Youth Declaration on African Peace' presented to the African Union and other continental governance bodies."
    ],
    meta: 'Youth • Policy • Advocacy',
    outcomes: ['Youth Declaration to the AU', 'Cross-border peace projects', 'Leadership mentorship network'],
  },
  // Add more as needed
};

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = programData[id || '1'] || programData['1'];

  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link to="/programs" className="text-fiae-gold hover:text-white transition-colors mb-8 inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
          <span className="text-lg">←</span> Back to Programs
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start mt-12">
          <div className="flex-grow max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-fiae-gold/10 text-fiae-gold text-[10px] font-bold uppercase tracking-widest mb-6">
              {program.tag}
            </span>
            <h1 className="text-[3.5rem] font-bold leading-tight mb-8">
              {program.title}
            </h1>
            
            <div className="space-y-6 text-xl text-fiae-textSecondary leading-relaxed">
              {program.longDescription.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:w-80 w-full flex flex-col gap-8">
            <div className="bg-fiae-surface border border-fiae-cardBorder rounded-2xl p-8 sticky top-32">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6 border-b border-fiae-gold/20 pb-2">Program Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-fiae-textTertiary text-[10px] uppercase font-bold block mb-1">Scope</label>
                  <p className="text-white font-medium">{program.meta}</p>
                </div>
                
                <div>
                  <label className="text-fiae-textTertiary text-[10px] uppercase font-bold block mb-1">Key Outcomes</label>
                  <ul className="space-y-2 mt-2">
                    {program.outcomes.map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-fiae-textSecondary">
                        <span className="text-fiae-gold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contact"
                  className="w-full inline-block bg-fiae-gold text-[#050508] text-center py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all mt-4"
                >
                  Register Interest
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </motion.div>

      {/* Placeholder Image Section */}
      <section className="mt-24">
        <div className="aspect-[21/9] border-2 border-dashed border-fiae-gold/20 rounded-3xl flex items-center justify-center bg-fiae-cardBg overflow-hidden">
          <div className="text-fiae-textTertiary font-bold uppercase tracking-[0.3em]">Program Gallery Placeholder</div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
