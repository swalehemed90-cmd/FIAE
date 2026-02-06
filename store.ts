import { Publication, ProgramSession, Event } from './types';

const STORAGE_KEYS = {
  PUBLICATIONS: 'fiae_publications',
  SESSIONS: 'fiae_sessions',
  EVENTS: 'fiae_events',
};

// Initial Data
const initialPublications: Publication[] = [
  {
    id: '1',
    title: 'The Evolution of IHL in Post-Conflict Africa',
    subtitle: 'Adapting legal frameworks for contemporary challenges',
    abstract: 'A comprehensive analysis of how international humanitarian law frameworks have adapted to contemporary non-international armed conflicts on the continent.',
    content: '<h2>Introduction</h2><p>International Humanitarian Law (IHL) in Africa is witnessing a paradigm shift...</p><blockquote>"The protection of civilians remains the cornerstone of modern IHL."</blockquote><p>Legal provisions must evolve...</p>',
    theme: 'IHL',
    date: '2025-05-15',
    author: 'FIAE Research Team',
    authorRole: 'Legal Division',
    status: 'published',
    readingTime: 8,
    tags: ['IHL', 'Peace', 'Law'],
    slug: 'evolution-of-ihl-africa',
    viewCount: 1240,
    citations: ['Geneva Convention IV', 'African Charter on Human Rights']
  },
  {
    id: '2',
    title: 'Digital Governance and Electoral Integrity',
    subtitle: 'The role of digital surveillance in emerging democracies',
    abstract: 'Exploring the impact of social media and digital surveillance on democratic processes in emerging African economies.',
    content: '<p>Digital tools have become double-edged swords in electoral cycles...</p>',
    theme: 'Elections',
    date: '2025-06-10',
    author: 'FIAE Research Team',
    authorRole: 'Policy Division',
    status: 'published',
    readingTime: 6,
    tags: ['Elections', 'Digital Governance', 'Democracy'],
    slug: 'digital-governance-elections',
    viewCount: 890,
    citations: ['ECOWAS Protocol on Democracy', 'AU Convention on Cyber Security']
  }
];

const initialSessions: ProgramSession[] = [
  {
    id: 's1',
    programId: '5', // FIAE One on One
    title: 'Constitutional Reform in East Africa',
    date: 'Last Sunday, June 2025',
    description: 'A deep dive into the recent constitutional changes and their impact on rule of law.',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

const initialEvents: Event[] = [
  {
    id: '1',
    date: 'Oct 15, 2026',
    title: '12th Pan-African IHL Moot Court Competition',
    location: 'Nairobi, Kenya',
  },
  {
    id: '2',
    date: 'Nov 02, 2026',
    title: 'Youth Peace & Security Summit',
    location: 'Addis Ababa, Ethiopia',
  },
  {
    id: '3',
    date: 'Dec 10, 2026',
    title: 'Annual Academic Excellence Gala',
    location: 'Online',
  },
  {
    id: '4',
    date: 'Jun 12, 2025',
    title: 'Workshop on Electoral Reform',
    location: 'Dakar, Senegal',
    isPast: true
  },
  {
    id: '5',
    date: 'Jan 20, 2025',
    title: 'Human Rights Day Colloquium',
    location: 'Johannesburg, South Africa',
    isPast: true
  }
];

export const getPublications = (): Publication[] => {
  const data = localStorage.getItem(STORAGE_KEYS.PUBLICATIONS);
  return data ? JSON.parse(data) : initialPublications;
};

export const savePublications = (pubs: Publication[]) => {
  localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(pubs));
};

export const getSessions = (): ProgramSession[] => {
  const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
  return data ? JSON.parse(data) : initialSessions;
};

export const saveSessions = (sessions: ProgramSession[]) => {
  localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
};

export const getEvents = (): Event[] => {
  const data = localStorage.getItem(STORAGE_KEYS.EVENTS);
  return data ? JSON.parse(data) : initialEvents;
};

export const saveEvents = (events: Event[]) => {
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
};
