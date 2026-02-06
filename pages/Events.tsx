
import React from 'react';
import { motion } from 'framer-motion';
import { Event } from '../types';

const events: Event[] = [
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

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-6 rounded-2xl border transition-all ${
      event.isPast 
        ? 'bg-transparent border-white/5 opacity-60' 
        : 'bg-fiae-surface border-fiae-gold/20 hover:border-fiae-gold/50 shadow-lg'
    }`}
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="text-center min-w-[100px] border-r border-white/10 pr-6">
          <span className="block text-fiae-gold font-bold text-lg">{event.date.split(',')[0]}</span>
          <span className="block text-fiae-textTertiary text-[10px] uppercase font-bold tracking-widest">
            {event.date.split(',')[1].trim()}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <div className="flex items-center gap-2 text-fiae-textSecondary text-sm italic">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        </div>
      </div>
      <button className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
        event.isPast 
          ? 'bg-white/5 text-white/40 cursor-not-allowed' 
          : 'bg-fiae-gold/10 text-fiae-gold hover:bg-fiae-gold hover:text-[#050508]'
      }`}>
        {event.isPast ? 'Past Event' : 'View Details →'}
      </button>
    </div>
  </motion.div>
);

const Events: React.FC = () => {
  const upcoming = events.filter(e => !e.isPast);
  const past = events.filter(e => e.isPast);

  return (
    <div className="py-[120px] px-6 max-w-[1000px] mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-[4rem] font-bold mb-4">Events Calendar</h1>
        <p className="text-fiae-textSecondary text-xl max-w-2xl mx-auto">
          Join us at our upcoming summits, competitions, and academic workshops across the continent.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-xs font-bold text-fiae-gold uppercase tracking-[0.3em] mb-8 border-b border-fiae-gold/20 pb-2 inline-block">Upcoming Events</h2>
        <div className="space-y-6">
          {upcoming.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-fiae-textTertiary uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-2 inline-block">Past Events Archive</h2>
        <div className="space-y-4">
          {past.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </div>
  );
};

export default Events;
