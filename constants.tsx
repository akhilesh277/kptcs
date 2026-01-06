
import { Faculty, Milestone, Announcement, Resource } from './types';

export const FACULTY_DATA: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Department Head & Professor',
    bio: 'Specializing in Quantum Computing and Artificial Intelligence with over 20 years of academic experience.',
    photo: 'https://picsum.photos/seed/sarah/400/400',
    department: 'Artificial Intelligence',
    email: 'sarah.mitchell@kpt.edu',
    researchInterests: ['Quantum Algorithms', 'Neural Networks']
  },
  {
    id: '2',
    name: 'Prof. David Chen',
    role: 'Associate Professor',
    bio: 'Lead researcher in Cyber Security and Distributed Systems. Published author of "Modern NetSec".',
    photo: 'https://picsum.photos/seed/david/400/400',
    department: 'Cyber Security',
    email: 'david.chen@kpt.edu',
    researchInterests: ['Blockchain', 'Zero Trust Architecture']
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    role: 'Assistant Professor',
    bio: 'Expert in Data Science and Big Data Analytics. Passionate about machine learning in healthcare.',
    photo: 'https://picsum.photos/seed/elena/400/400',
    department: 'Data Science',
    email: 'elena.rodriguez@kpt.edu',
    researchInterests: ['Predictive Modeling', 'Bioinformatics']
  }
];

export const MILESTONES: Milestone[] = [
  { year: '2005', title: 'Department Founded', description: 'Established with the first cohort of 40 students.' },
  { year: '2012', title: 'Research Lab Launch', description: 'Opened our first state-of-the-art AI Research Laboratory.' },
  { year: '2018', title: 'International Accreditation', description: 'Received ABET accreditation for our CS program.' },
  { year: '2023', title: 'Global Tech Partnership', description: 'Signed strategic partnership with leading Silicon Valley firms.' }
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', date: 'Oct 24, 2023', title: 'Spring Semester Registration', content: 'Online registration opens next Monday for all CS majors.', category: 'academic' },
  { id: '2', date: 'Oct 20, 2023', title: 'Hackathon 2024', content: 'Annual department hackathon scheduled for February.', category: 'event' },
  { id: '3', date: 'Oct 15, 2023', title: 'Google Internships', content: 'Applications now open for junior and senior students.', category: 'career' }
];

export const RESOURCES: Resource[] = [
  { id: '1', title: 'CS Curriculum 2023-2024', type: 'PDF', size: '2.4 MB', url: '#' },
  { id: '2', title: 'Thesis Guidelines', type: 'PDF', size: '1.1 MB', url: '#' },
  { id: '3', title: 'Software Engineering Lab Manual', type: 'DOC', size: '4.5 MB', url: '#' }
];
