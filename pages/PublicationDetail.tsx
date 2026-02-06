import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPublications } from '../store';
import { Publication } from '../types';

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pub, setPub] = useState<Publication | null>(null);

  useEffect(() => {
    const all = getPublications();
    // Support lookup by ID or slug
    const found = all.find(p => p.id === id || p.slug === id);
    if (found) setPub(found);
  }, [id]);

  if (!pub) return <div className="py-[120px] text-center">Loading Institutional Resource...</div>;

  return (
    <div className="py-[120px] px-6 max-w-[900px] mx-auto min-h-screen">
      <Link to="/publications" className="text-fiae-primary hover:text-white transition-colors mb-12 inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Library
      </Link>
      
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-block px-3 py-1 bg-fiae-blue/10 text-fiae-blue rounded-full text-[10px] font-bold tracking-widest uppercase">
            {pub.theme}
          </span>
          <span className="text-fiae-textTertiary text-[10px] font-bold uppercase tracking-widest">
            {pub.readingTime} min read
          </span>
        </div>

        <h1 className="text-[3rem] md:text-[4.5rem] font-bold leading-[1.1] mb-4 text-white">{pub.title}</h1>
        {pub.subtitle && <p className="text-2xl text-fiae-textSecondary mb-12 italic border-l-2 border-fiae-primary/30 pl-6">{pub.subtitle}</p>}
        
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-8 border-y border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-fiae-primary/10 border border-fiae-primary/20 flex items-center justify-center font-bold text-fiae-primary text-xl">
              {pub.author.charAt(0)}
            </div>
            <div>
              <div className="text-white font-bold text-lg">{pub.author}</div>
              <div className="text-fiae-textTertiary text-sm uppercase tracking-widest">{pub.authorRole || 'Contributor'}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-fiae-textTertiary text-xs uppercase tracking-widest font-bold mb-1">Published</div>
            <div className="text-white font-medium">{pub.date}</div>
          </div>
        </div>

        {/* Abstract Box */}
        <div className="p-8 bg-fiae-surface border border-fiae-primary/10 rounded-2xl mb-12">
          <h4 className="text-fiae-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Executive Abstract</h4>
          <p className="text-white/80 leading-relaxed italic">{pub.abstract}</p>
        </div>

        {/* Main Content */}
        <div 
          className="prose prose-invert prose-primary max-w-none text-white/80 text-xl leading-relaxed 
            prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 
            prose-p:mb-8 prose-blockquote:border-fiae-primary prose-blockquote:bg-fiae-primary/5 
            prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:italic
            prose-li:marker:text-fiae-primary"
          dangerouslySetInnerHTML={{ __html: pub.content }}
        />

        {/* Citations & References */}
        {pub.citations && pub.citations.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/5">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-fiae-primary">Citations & References</h3>
            <ul className="space-y-4">
              {pub.citations.map((cite, i) => (
                <li key={i} className="flex gap-4 text-fiae-textSecondary text-sm">
                  <span className="text-fiae-primary font-bold">[{i + 1}]</span>
                  <span className="leading-relaxed">{cite}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Meta */}
        <div className="mt-16 pt-8 flex flex-wrap gap-3 border-t border-white/5">
          {pub.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold text-fiae-textTertiary uppercase border border-white/10 px-3 py-1 rounded-md hover:border-fiae-primary/50 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

export default PublicationDetail;