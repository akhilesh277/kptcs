
import { Faculty, Milestone, Announcement, Resource } from './types';

export const FACULTY_DATA: Faculty[] = [
  {
    id: 'hod-1',
    name: 'Prof. Parashuram D Talwar',
    role: 'Head of Department',
    bio: 'Provides academic guidance and leadership to both students and faculty.',
    photo: 'https://ik.imagekit.io/akhileshu/parashuram%20talawar%20sir.png',
    department: 'Computer Science',
    researchInterests: ['Java', 'Python'],
    category: 'hod'
  },
  {
    id: 'perm-1',
    name: 'Mrs. Leelavathi R',
    role: 'Permanent Lecturer',
    bio: 'Experienced faculty member focusing on full-stack technologies and core computer science principles.',
    photo: 'https://ui-avatars.com/api/?name=Leelavathi+R&background=6366f1&color=fff&size=512',
    department: 'Computer Science',
    researchInterests: ['Full Stack Development'],
    category: 'permanent'
  },
  {
    id: 'perm-2',
    name: 'Mr. Satish',
    role: 'Permanent Lecturer',
    bio: 'Dedicated lecturer specializing in cybersecurity and network defense mechanisms.',
    photo: 'https://ui-avatars.com/api/?name=Satish&background=6366f1&color=fff&size=512',
    department: 'Computer Science',
    researchInterests: ['Cyber Security'],
    category: 'permanent'
  },
  {
    id: 'guest-1',
    name: 'Mrs. Akshitha',
    role: 'Guest Lecturer',
    bio: 'Subject matter expert in software engineering methodologies and database management systems.',
    photo: 'https://ui-avatars.com/api/?name=Akshitha&background=cbd5e1&color=475569&size=512',
    department: 'Computer Science',
    subjects: ['Software Engineering', 'DBMS'],
    category: 'guest'
  },
  {
    id: 'guest-2',
    name: 'Mrs. Likhitha',
    role: 'Guest Lecturer',
    bio: 'Focuses on developing essential IT skills and hardware management expertise among students.',
    photo: 'https://ui-avatars.com/api/?name=Likhitha&background=cbd5e1&color=475569&size=512',
    department: 'Computer Science',
    subjects: ['IT Skills', 'CHMS'],
    category: 'guest'
  },
  {
    id: 'guest-3',
    name: 'Mrs. Sheetal J Shet',
    role: 'Guest Lecturer',
    bio: 'Specialist in modern computer networking and communication infrastructure.',
    photo: 'https://ui-avatars.com/api/?name=Sheetal+J+Shet&background=cbd5e1&color=475569&size=512',
    department: 'Computer Science',
    subjects: ['Computer Networking'],
    category: 'guest'
  },
  {
    id: 'guest-4',
    name: 'Mrs. Akshatha D',
    role: 'Guest Lecturer',
    bio: 'Provides strong foundations in computing principles and logical reasoning.',
    photo: 'https://ui-avatars.com/api/?name=Akshatha+D&background=cbd5e1&color=475569&size=512',
    department: 'Computer Science',
    subjects: ['FOC'],
    category: 'guest'
  }
];

export const MILESTONES: Milestone[] = [
  { year: '2005', title: 'Department Founded', description: 'Established with the first cohort of students.' },
  { year: '2012', title: 'Research Lab Launch', description: 'Opened our first state-of-the-art Research Laboratory.' },
  { year: '2018', title: 'International Accreditation', description: 'Received official accreditation for our CS program.' },
  { year: '2023', title: 'Global Tech Partnership', description: 'Signed strategic partnership with leading firms.' }
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', date: 'Oct 24, 2023', title: 'Spring Semester Registration', content: 'Online registration opens next Monday for all CS majors.', category: 'academic' },
  { id: '2', date: 'Oct 20, 2023', title: 'Hackathon 2024', content: 'Annual department hackathon scheduled for February.', category: 'event' },
  { id: '3', date: 'Oct 15, 2023', title: 'Internship Opportunities', content: 'Applications now open for junior and senior students.', category: 'career' }
];

export const RESOURCES: Resource[] = [
  { id: '1', title: 'CS Curriculum 2023-2024', type: 'PDF', size: '2.4 MB', url: '#' },
  { id: '2', title: 'Thesis Guidelines', type: 'PDF', size: '1.1 MB', url: '#' },
  { id: '3', title: 'Lab Manuals', type: 'DOC', size: '4.5 MB', url: '#' }
];
