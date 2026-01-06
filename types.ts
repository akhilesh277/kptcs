
export interface Faculty {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  department: string;
  email?: string;
  researchInterests?: string[];
  subjects?: string[];
  category: 'hod' | 'permanent' | 'guest';
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  category: 'academic' | 'event' | 'career';
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'DOC' | 'ZIP';
  size: string;
  url: string;
}

export interface NavItem {
  label: string;
  hash: string;
}
