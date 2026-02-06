export interface Program {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  link?: string;
}

export interface ProgramSession {
  id: string;
  programId: string;
  title: string;
  date: string;
  description: string;
  youtubeId?: string;
}

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  abstract: string;
  content: string;
  theme: string;
  date: string;
  lastUpdated?: string;
  author: string;
  authorRole?: string;
  status: 'draft' | 'review' | 'published';
  readingTime: number;
  featuredImage?: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  slug: string;
  citations?: string[];
  viewCount: number;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
  isPast?: boolean;
}