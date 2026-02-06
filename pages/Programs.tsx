
import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { Program } from '../types';

const allPrograms: Program[] = [
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
    meta: 'Reports • Articles • Briefs'
  },
  {
    id: '5',
    tag: 'LEADERSHIP',
    title: 'Executive Training for Future Diplomats',
    description: 'Advanced workshops on international relations, diplomatic protocol, and multilateral negotiation.',
    meta: 'Professional • Biennial'
  },
  {
    id: '6',
    tag: 'HUMANITARIAN',
    title: 'Refugee Rights & Protection Workshop',
    description: 'Legal training focused on the rights of displaced persons under African and international law.',
    meta: 'Specialized • Regional'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="py-[120px] px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-[4rem] font-bold mb-6">Our Programs</h1>
        <p className="text-fiae-textSecondary text-xl max-w-2xl mx-auto">
          Comprehensive continental initiatives designed to foster academic excellence, promote peace, and uphold the rule of law.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPrograms.map((p, idx) => (
          <ProgramCard key={p.id} program={p} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Programs;
