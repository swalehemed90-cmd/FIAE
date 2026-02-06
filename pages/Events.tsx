import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Event } from '../types';
import { getEvents } from '../store';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-6 rounded-2xl border transition-all ${
      event.isPast 
        ? 'bg-transparent border-white/5 opacity-60' 
        : 'bg-fiae-surface border-fiae-primary/20 hover:border-fiae-primary/50 shadow-lg'
    }`}
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="text-center min-w-[100px] border-r border-white/10 pr-6">
          <span className="block text-fiae-primary font-bold text-lg">{event.date.split(',')[0]}</span>
          <span className="block text-fiae-textTertiary text-[10px] uppercase font-bold tracking-widest">
            {event.date.includes(',') ? event.date.split(',')[1].trim() : ''}
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
          : 'bg-fiae-primary/10 text-fiae-primary hover:bg-fiae-primary hover:text-[#050508]'
      }`}>
        {event.isPast ? 'Past Event' : 'View Details →'}
      </button>
    </div>
  </motion.div>
);

const Events: React.FC = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    setAllEvents(getEvents());
  }, []);

  const upcoming = allEvents.filter(e => !e.isPast);
  const past = allEvents.filter(e => e.isPast);

  return (
    <div className="py-[120px] px-6 max-w-[1000px] mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-[4rem] font-bold mb-4">Events Calendar</h1>
        <p className="text-fiae-textSecondary text-xl max-w-2xl mx-auto">
          Join us at our upcoming summits, competitions, and academic workshops across the continent.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-xs font-bold text-fiae-primary uppercase tracking-[0.3em] mb-8 border-b border-fiae-primary/20 pb-2 inline-block">Upcoming Events</h2>
        <div className="space-y-6">
          {upcoming.length > 0 ? upcoming.map(e => <EventCard key={e.id} event={e} />) : <p className="text-fiae-textTertiary text-center py-10">No upcoming events scheduled.</p>}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold text-fiae-textTertiary uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-2 inline-block">Past Events Archive</h2>
        <div className="space-y-4">
          {past.length > 0 ? past.map(e => <EventCard key={e.id} event={e} />) : <p className="text-fiae-textTertiary text-center py-10">Archive is currently empty.</p>}
        </div>
      </div>
    </div>
  );
};

export default Events;
