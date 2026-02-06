
export interface Program {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
}

export interface Publication {
  id: string;
  title: string;
  abstract: string;
  theme: string;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
  isPast?: boolean;
}
