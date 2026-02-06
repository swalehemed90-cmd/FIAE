import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPublications, savePublications, getSessions, saveSessions, getEvents, saveEvents } from '../../store';
import { Publication, ProgramSession, Event } from '../../types';

// Declare Quill for TS
declare const Quill: any;

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pubs' | 'sessions' | 'events' | 'analytics'>('pubs');
  const [pubs, setPubs] = useState<Publication[]>([]);
  const [sessions, setSessions] = useState<ProgramSession[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [editingPub, setEditingPub] = useState<Partial<Publication> | null>(null);
  const [editingSession, setEditingSession] = useState<Partial<ProgramSession> | null>(null);
  const [editingEvent, setEditingEvent] = useState<Partial<Event> | null>(null);
  const [editorStep, setEditorStep] = useState<'content' | 'metadata' | 'seo'>('content');
  
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);

  useEffect(() => {
    setPubs(getPublications());
    setSessions(getSessions());
    setEvents(getEvents());
  }, []);

  // Initialize Quill when editingPub is set and the DOM is ready
  useEffect(() => {
    if (editingPub && editorStep === 'content' && editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        },
        placeholder: 'Begin your scholarly contribution...'
      });

      // Set initial content
      if (editingPub.content) {
        quillInstance.current.root.innerHTML = editingPub.content;
      }

      // Sync content on change
      quillInstance.current.on('text-change', () => {
        setEditingPub(prev => prev ? ({ ...prev, content: quillInstance.current.root.innerHTML }) : null);
      });
    }
    
    // Cleanup Quill instance on close or step change
    return () => {
      if (!editingPub || editorStep !== 'content') {
        quillInstance.current = null;
      }
    };
  }, [editingPub, editorStep]);

  const handleLogout = () => {
    localStorage.removeItem('fiae_admin_auth');
    window.location.reload();
  };

  const calculateReadingTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 200);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  // Publications Management
  const addPub = () => {
    const id = Date.now().toString();
    setEditingPub({ 
      id, 
      title: '', 
      subtitle: '',
      abstract: '', 
      content: '', 
      theme: 'General', 
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }), 
      author: 'FIAE Scholar',
      authorRole: 'Editorial Board',
      status: 'draft',
      readingTime: 0,
      tags: [],
      slug: '',
      citations: [],
      viewCount: 0
    });
    setEditorStep('content');
  };

  const savePub = () => {
    if (!editingPub) return;
    const finalPub = {
      ...editingPub,
      readingTime: calculateReadingTime(editingPub.content || ''),
      slug: editingPub.slug || generateSlug(editingPub.title || 'untitled'),
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    } as Publication;

    const newPubs = pubs.find(p => p.id === finalPub.id) 
      ? pubs.map(p => p.id === finalPub.id ? finalPub : p)
      : [finalPub, ...pubs];
    
    setPubs(newPubs);
    savePublications(newPubs);
    setEditingPub(null);
    quillInstance.current = null;
  };

  const deletePub = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this publication?')) {
      const newPubs = pubs.filter(p => p.id !== id);
      setPubs(newPubs);
      savePublications(newPubs);
    }
  };

  // Events Management
  const addEvent = () => {
    setEditingEvent({ id: Date.now().toString(), title: '', date: '', location: '', isPast: false });
  };

  const saveEventAction = () => {
    if (!editingEvent) return;
    const newEvents = events.find(e => e.id === editingEvent.id) 
      ? events.map(e => e.id === editingEvent.id ? (editingEvent as Event) : e)
      : [...events, editingEvent as Event];
    setEvents(newEvents);
    saveEvents(newEvents);
    setEditingEvent(null);
  };

  const deleteEvent = (id: string) => {
    if (confirm('Delete this event from the calendar?')) {
      const newEvents = events.filter(e => e.id !== id);
      setEvents(newEvents);
      saveEvents(newEvents);
    }
  };

  return (
    <div className="min-h-screen bg-fiae-bg text-white font-serif">
      {/* Admin Nav */}
      <nav className="border-b border-white/5 p-6 flex justify-between items-center bg-fiae-surface sticky top-0 z-[60] backdrop-blur-xl">
        <div className="flex items-center gap-10">
          <div className="flex flex-col">
            <span className="text-fiae-primary font-bold text-xl tracking-tighter">FIAE COMMAND</span>
            <span className="text-[10px] text-fiae-textTertiary font-bold uppercase tracking-[0.2em]">Institutional Governance</span>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'pubs', label: 'Publications' },
              { id: 'sessions', label: 'Sessions' },
              { id: 'events', label: 'Events' },
              { id: 'analytics', label: 'Analytics' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-fiae-primary text-fiae-bg' : 'text-fiae-textTertiary hover:text-white hover:bg-white/5'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <div className="text-white text-xs font-bold">FIAE</div>
            <div className="text-fiae-primary text-[10px] uppercase font-bold">Admin Role</div>
          </div>
          <button onClick={handleLogout} className="text-red-500/60 hover:text-red-500 text-[10px] font-bold uppercase tracking-widest transition-colors">Terminate Session</button>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto p-12">
        {activeTab === 'pubs' && (
          <div className="space-y-10">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold mb-2">Library Governance</h2>
                <p className="text-fiae-textTertiary">Manage scholarly articles, policy briefs, and legal research.</p>
              </div>
              <button onClick={addPub} className="bg-fiae-primary text-fiae-bg px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:shadow-lg hover:shadow-fiae-primary/20 transition-all active:scale-95">
                New Publication
              </button>
            </div>
            
            <div className="grid gap-6">
              {pubs.map(p => (
                <div key={p.id} className="bg-fiae-surface p-8 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-fiae-primary/20 transition-all">
                  <div className="flex gap-8 items-center">
                    <div className="text-center w-20 py-2 bg-fiae-bg border border-white/5 rounded-xl">
                      <div className="text-fiae-primary font-bold text-xl">{p.date.split(' ').length > 1 ? p.date.split(' ')[1] : '—'}</div>
                      <div className="text-[9px] text-fiae-textTertiary uppercase font-bold">{p.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${p.status === 'published' ? 'bg-fiae-primary/10 text-fiae-primary' : 'bg-fiae-blue/10 text-fiae-blue'}`}>
                          {p.status}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-fiae-textTertiary px-2 py-0.5 border border-white/5 rounded">
                          {p.theme}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-fiae-primary transition-colors">{p.title}</h3>
                      <p className="text-fiae-textTertiary text-xs mt-1">Author: {p.author} • {p.readingTime} min read</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-right hidden md:block">
                      <div className="text-white font-bold">{p.viewCount.toLocaleString()}</div>
                      <div className="text-[9px] text-fiae-textTertiary uppercase font-bold">Total Reach</div>
                    </div>
                    <div className="h-10 w-[1px] bg-white/5" />
                    <div className="flex gap-4">
                      <button onClick={() => setEditingPub(p)} className="p-2 text-fiae-primary hover:bg-fiae-primary/10 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button onClick={() => deletePub(p.id)} className="p-2 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-10">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold mb-2">Events Calendar</h2>
                <p className="text-fiae-textTertiary">Manage continental summits, workshops, and competitions.</p>
              </div>
              <button onClick={addEvent} className="bg-fiae-primary text-fiae-bg px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:shadow-lg hover:shadow-fiae-primary/20 transition-all active:scale-95">
                New Event
              </button>
            </div>
            
            <div className="grid gap-6">
              {events.map(e => (
                <div key={e.id} className="bg-fiae-surface p-8 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-fiae-primary/20 transition-all">
                  <div className="flex gap-8 items-center">
                    <div className="text-center w-28 py-2 bg-fiae-bg border border-white/5 rounded-xl">
                      <div className="text-fiae-primary font-bold text-sm">{e.date}</div>
                    </div>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${e.isPast ? 'bg-white/5 text-white/40' : 'bg-fiae-primary/10 text-fiae-primary'}`}>
                          {e.isPast ? 'Past' : 'Upcoming'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-fiae-primary transition-colors">{e.title}</h3>
                      <p className="text-fiae-textTertiary text-xs mt-1">{e.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setEditingEvent(e)} className="p-2 text-fiae-primary hover:bg-fiae-primary/10 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button onClick={() => deleteEvent(e.id)} className="p-2 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fiae-surface p-10 rounded-3xl border border-white/5">
              <div className="text-fiae-textTertiary uppercase font-bold text-[10px] tracking-widest mb-2">Total Viewership</div>
              <div className="text-5xl font-bold text-fiae-primary">48.2k</div>
              <div className="text-fiae-primary text-xs mt-4 flex items-center gap-2">
                <span className="text-lg">↑</span> +12% this month
              </div>
            </div>
            <div className="bg-fiae-surface p-10 rounded-3xl border border-white/5">
              <div className="text-fiae-textTertiary uppercase font-bold text-[10px] tracking-widest mb-2">Avg. Reading Time</div>
              <div className="text-5xl font-bold text-fiae-blue">6:42</div>
              <div className="text-fiae-blue text-xs mt-4">Continental average: 4:15</div>
            </div>
            <div className="bg-fiae-surface p-10 rounded-3xl border border-white/5">
              <div className="text-fiae-textTertiary uppercase font-bold text-[10px] tracking-widest mb-2">Active Scholars</div>
              <div className="text-5xl font-bold text-white">124</div>
              <div className="text-fiae-textTertiary text-xs mt-4">Representing 14 nations</div>
            </div>
          </div>
        )}
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {editingEvent && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-fiae-surface border border-white/10 w-full max-w-2xl p-10 rounded-3xl space-y-6">
              <h2 className="text-2xl font-bold text-fiae-primary uppercase tracking-widest">Edit Event</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Title</label>
                  <input 
                    className="bg-fiae-bg p-4 rounded-xl border border-white/5 outline-none focus:border-fiae-primary transition-colors w-full" 
                    placeholder="Event Title" 
                    value={editingEvent.title} 
                    onChange={(e) => setEditingEvent({...editingEvent, title: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Date (e.g. Oct 15, 2026)</label>
                    <input 
                      className="bg-fiae-bg p-4 rounded-xl border border-white/5 outline-none focus:border-fiae-primary transition-colors w-full" 
                      placeholder="Date" 
                      value={editingEvent.date} 
                      onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Location</label>
                    <input 
                      className="bg-fiae-bg p-4 rounded-xl border border-white/5 outline-none focus:border-fiae-primary transition-colors w-full" 
                      placeholder="Location" 
                      value={editingEvent.location} 
                      onChange={(e) => setEditingEvent({...editingEvent, location: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2">
                   <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Mark as Past Event</label>
                   <input 
                    type="checkbox"
                    checked={editingEvent.isPast}
                    onChange={(e) => setEditingEvent({...editingEvent, isPast: e.target.checked})}
                    className="w-5 h-5 rounded border-white/5 bg-fiae-bg text-fiae-primary focus:ring-fiae-primary"
                   />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={saveEventAction} className="flex-grow bg-fiae-primary text-fiae-bg p-4 rounded-xl font-bold uppercase tracking-widest">Update Calendar</button>
                <button onClick={() => setEditingEvent(null)} className="px-8 bg-white/5 p-4 rounded-xl font-bold uppercase tracking-widest text-white/40">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Publication Editing Modal */}
      <AnimatePresence>
        {editingPub && (
          <div className="fixed inset-0 bg-fiae-bg/95 backdrop-blur-2xl z-[100] flex flex-col">
            {/* Editor Header */}
            <div className="border-b border-white/5 p-6 flex justify-between items-center bg-fiae-surface">
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-fiae-primary font-bold text-lg">Publication Editor</span>
                  <span className="text-[10px] text-fiae-textTertiary font-bold uppercase">Institutional Repository</span>
                </div>
                <div className="flex gap-2">
                  {(['content', 'metadata', 'seo'] as const).map(step => (
                    <button 
                      key={step} 
                      onClick={() => setEditorStep(step)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${editorStep === step ? 'bg-white/10 text-white' : 'text-fiae-textTertiary hover:text-white'}`}
                    >
                      {step}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setEditingPub(null)} className="px-6 py-3 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Discard</button>
                <button onClick={savePub} className="px-10 py-3 bg-fiae-primary text-fiae-bg rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-fiae-primary/10">Commit to Library</button>
              </div>
            </div>

            {/* Editor Body */}
            <div className="flex-grow overflow-y-auto p-12">
              <div className="max-w-[900px] mx-auto space-y-12">
                
                {editorStep === 'content' && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <input 
                      type="text"
                      className="w-full bg-transparent text-5xl font-bold border-none outline-none placeholder:text-white/10"
                      placeholder="Article Title"
                      value={editingPub.title}
                      onChange={e => setEditingPub(prev => prev ? ({ ...prev, title: e.target.value }) : null)}
                    />
                    <input 
                      type="text"
                      className="w-full bg-transparent text-2xl text-fiae-textSecondary italic border-none outline-none placeholder:text-white/10"
                      placeholder="Subtitle or Lead Sentence"
                      value={editingPub.subtitle}
                      onChange={e => setEditingPub(prev => prev ? ({ ...prev, subtitle: e.target.value }) : null)}
                    />
                    <div className="min-h-[500px]" ref={editorRef} />
                  </div>
                )}

                {editorStep === 'metadata' && (
                  <div className="grid grid-cols-2 gap-12 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Executive Abstract</label>
                        <textarea 
                          className="w-full bg-fiae-surface border border-white/5 rounded-2xl p-6 text-white h-40 outline-none focus:border-fiae-primary transition-all"
                          value={editingPub.abstract}
                          onChange={e => setEditingPub(prev => prev ? ({ ...prev, abstract: e.target.value }) : null)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Theme / Category</label>
                          <select 
                            className="w-full bg-fiae-surface border border-white/5 rounded-xl p-4 text-white outline-none focus:border-fiae-primary"
                            value={editingPub.theme}
                            onChange={e => setEditingPub(prev => prev ? ({ ...prev, theme: e.target.value }) : null)}
                          >
                            <option>IHL</option>
                            <option>Elections</option>
                            <option>Gender</option>
                            <option>Climate</option>
                            <option>Security</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Publish Status</label>
                          <select 
                            className="w-full bg-fiae-surface border border-white/5 rounded-xl p-4 text-white outline-none focus:border-fiae-primary"
                            value={editingPub.status}
                            onChange={e => setEditingPub(prev => prev ? ({ ...prev, status: e.target.value as any }) : null)}
                          >
                            <option value="draft">Draft</option>
                            <option value="review">Under Review</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                       <div className="space-y-2">
                        <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Citations & References (One per line)</label>
                        <textarea 
                          className="w-full bg-fiae-surface border border-white/5 rounded-2xl p-6 text-white h-40 outline-none focus:border-fiae-primary transition-all font-mono text-sm"
                          placeholder="Case of Prosecutor v. Tadic (1995)..."
                          value={editingPub.citations?.join('\n')}
                          onChange={e => setEditingPub(prev => prev ? ({ ...prev, citations: e.target.value.split('\n') }) : null)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Tags (Comma separated)</label>
                        <input 
                          type="text"
                          className="w-full bg-fiae-surface border border-white/5 rounded-xl p-4 text-white outline-none focus:border-fiae-primary"
                          value={editingPub.tags?.join(', ')}
                          onChange={e => setEditingPub(prev => prev ? ({ ...prev, tags: e.target.value.split(',').map(t => t.trim()) }) : null)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {editorStep === 'seo' && (
                  <div className="max-w-[600px] mx-auto space-y-12 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="p-8 bg-fiae-surface border border-white/5 rounded-3xl">
                      <h3 className="text-xl font-bold mb-8">Search Engine Intelligence</h3>
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Slug (URL Path)</label>
                          <input 
                            type="text"
                            className="w-full bg-fiae-bg border border-white/10 rounded-xl p-4 text-fiae-blue font-mono text-sm"
                            value={editingPub.slug || generateSlug(editingPub.title || '')}
                            onChange={e => setEditingPub(prev => prev ? ({ ...prev, slug: e.target.value }) : null)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-widest">Meta Description</label>
                          <textarea 
                            className="w-full bg-fiae-bg border border-white/10 rounded-xl p-4 text-white text-sm h-32 outline-none focus:border-fiae-primary"
                            placeholder="Brief snippet for search results..."
                            value={editingPub.seoDescription}
                            onChange={e => setEditingPub(prev => prev ? ({ ...prev, seoDescription: e.target.value }) : null)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 border border-dashed border-white/10 rounded-3xl">
                      <div className="text-[10px] font-bold text-fiae-textTertiary uppercase tracking-widest mb-4">Google Search Preview</div>
                      <div className="text-blue-400 text-xl font-medium mb-1 truncate">{editingPub.seoTitle || editingPub.title}</div>
                      <div className="text-fiae-primary text-sm mb-2">firdaouscentre.org/publications/{editingPub.slug || generateSlug(editingPub.title || '')}</div>
                      <div className="text-white/40 text-sm line-clamp-2">{editingPub.seoDescription || editingPub.abstract}</div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
