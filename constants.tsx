import { Faculty, Milestone, Announcement, Resource } from './types';

export const FACULTY_DATA: Faculty[] = [
  {
    id: 'hod-1',
    name: 'Prof. Parashuram D Talwar',
    role: 'Head of Department',
    bio: 'Leads the department with a focus on quality technical education and skill development in computing.',
    photo: 'https://ik.imagekit.io/akhileshu/parashuram%20talawar%20sir.png',
    department: 'Computer Science',
    researchInterests: ['Technical Education', 'Academic Leadership'],
    category: 'hod'
  },
  {
    id: 'perm-1',
    name: 'Mrs. Leelavathi R',
    role: 'Permanent Lecturer',
    bio: 'Expert in Full Stack Development, focusing on web architectures and modern programming.',
    photo: 'https://ik.imagekit.io/akhileshu/leelavathi.png',
    department: 'Computer Science',
    researchInterests: ['Full Stack Development'],
    category: 'permanent'
  },
  {
    id: 'perm-2',
    name: 'Mr. Satish',
    role: 'Permanent Lecturer',
    bio: 'Specialist in Cyber Security and network defense mechanisms.',
    photo: 'https://ik.imagekit.io/akhileshu/sathish%20sir.jpg',
    department: 'Computer Science',
    researchInterests: ['Cyber Security'],
    category: 'permanent'
  },
  {
    id: 'guest-1',
    name: 'Mrs. Akshitha',
    role: 'Guest Lecturer',
    bio: 'Lecturer for Software Engineering and Database Management Systems (DBMS).',
    photo: 'https://ik.imagekit.io/akhileshu/akshitha.png',
    department: 'Computer Science',
    subjects: ['Software Engineering', 'DBMS'],
    category: 'guest'
  },
  {
    id: 'guest-2',
    name: 'Mrs. Akshatha',
    role: 'Guest Lecturer',
    bio: 'Provides instruction in fundamental computer science and programming concepts.',
    photo: 'https://ik.imagekit.io/akhileshu/akshatha.png',
    department: 'Computer Science',
    subjects: ['Programming Concepts'],
    category: 'guest'
  },
  {
    id: 'guest-3',
    name: 'Mrs. Likhitha',
    role: 'Guest Lecturer',
    bio: 'Focuses on IT Skills and Computer Hardware Management & Services (CHMS).',
    photo: 'https://ik.imagekit.io/akhileshu/likitha.png',
    department: 'Computer Science',
    subjects: ['IT Skills', 'CHMS'],
    category: 'guest'
  },
  {
    id: 'guest-4',
    name: 'Mrs. Sheetal J Shet',
    role: 'Guest Lecturer',
    bio: 'Lecturer specializing in Computer Networking and data communications.',
    photo: 'https://ik.imagekit.io/akhileshu/likitha.png',
    department: 'Computer Science',
    subjects: ['Computer Networking'],
    category: 'guest'
  }
];

export const SYLLABUS_AREAS = [
  'Programming Languages & Data Structures',
  'Database Management Systems (DBMS)',
  'Software Engineering & Full Stack Development',
  'Computer Networking & Cyber Security',
  'Operating Systems & System Management',
  'Emerging Technologies (Cloud, AI/ML basics)'
];

export const MILESTONES: Milestone[] = [
  { year: 'Establishment', title: 'Department Founded', description: 'Established to impart quality technical education in computing and IT.' },
  { year: 'Development', title: 'Outcome-Based Education', description: 'Implementation of industry-oriented syllabus and hands-on learning practices.' },
  { year: 'Modernization', title: 'State-of-the-Art Labs', description: 'Access to modern laboratories and open-source platforms for student projects.' }
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', date: 'Oct 2023', title: 'Industrial Training', content: 'Curriculum emphasis on project-based learning and industrial training.', category: 'academic' },
  { id: '2', date: 'Nov 2023', title: 'Lab Update', content: 'Regular updates to computer laboratory facilities and software versions.', category: 'event' },
  { id: '3', date: 'Dec 2023', title: 'Placement Drive', content: 'Collaboration with local industries for student placement and internships.', category: 'career' }
];

export const RESOURCES: Resource[] = [
  { id: '1', title: 'Computer Science Syllabus', type: 'PDF', size: '1.2 MB', url: '#' },
  { id: '2', title: 'DBMS Lab Manual', type: 'PDF', size: '2.5 MB', url: '#' },
  { id: '3', title: 'IT Skills Project Guidelines', type: 'DOC', size: '0.5 MB', url: '#' }
];
