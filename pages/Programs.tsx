
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
    tag: 'SCHOLARSHIP',
    title: 'Late J.S Ajiboye Scholarship',
    description: 'African Youth Empowerment Scholarship aiming to unlock the vast potential of young minds across the continent through education.',
    meta: 'Merit-based • Primary & Secondary'
  },
  {
    id: '4',
    tag: 'RESEARCH & ADVOCACY',
    title: 'Policy Research & Publications',
    description: 'Evidence-based research on law, governance, elections, climate, and human rights in Africa.',
    meta: 'Reports • Articles • Briefs',
    link: '/publications'
  },
  {
    id: '5',
    tag: 'LEADERSHIP & DIALOGUE',
    title: 'FIAE One on One',
    description: 'Monthly scholarly interview sessions addressing continental challenges and sustainable solutions across Africa.',
    meta: 'Monthly • Scholarly Interview'
  },
  {
    id: '6',
    tag: 'CONTEMPORARY ISSUES',
    title: 'Webinar Series',
    description: 'High-impact digital forums discussing contemporary issues and emerging trends affecting the African continent.',
    meta: 'Regular • Virtual Forums'
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
