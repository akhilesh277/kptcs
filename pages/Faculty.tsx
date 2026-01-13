import React, { useState } from 'react';
import { FACULTY_DATA } from '../constants';
import { Faculty as FacultyType } from '../types';

const FacultyCard: React.FC<{ faculty: FacultyType }> = ({ faculty }) => {
  const [imgError, setImgError] = useState(false);
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=6366f1&color=fff&size=256`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col group h-full hover:shadow-md transition-all w-full max-w-[280px]">
      <div className="aspect-square bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
        <img 
          src={imgError ? fallback : faculty.photo} 
          alt={faculty.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 p-4 text-center">
          <h3 className="text-sm font-bold text-white">{faculty.name}</h3>
          <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">{faculty.role}</p>
        </div>
      </div>
      <div className="p-4 flex-grow text-center">
        <p className="text-[12px] text-slate-500 dark:text-slate-400 italic mb-4 leading-relaxed line-clamp-3">"{faculty.bio}"</p>
        <div className="flex flex-wrap gap-1 mt-auto justify-center">
          {(faculty.researchInterests || faculty.subjects || []).slice(0, 2).map((item, i) => (
            <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Faculty: React.FC = () => {
  const categories = [
    { id: 'hod', title: 'Head of Department' },
    { id: 'permanent', title: 'Permanent Staff' },
    { id: 'guest', title: 'Guest Lecturers' }
  ];

  return (
    <div className="animate-fadeIn py-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-6 text-center">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">CS Faculty</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Dedicated teaching professionals at KPT Mangalore Computer Science Department.</p>
        </div>

        {categories.map(cat => {
          const members = FACULTY_DATA.filter(f => f.category === cat.id);
          if (members.length === 0) return null;

          return (
            <section key={cat.id} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-grow bg-slate-100 dark:bg-slate-800"></div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  {cat.title}
                </h2>
                <div className="h-[1px] flex-grow bg-slate-100 dark:bg-slate-800"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {members.map(faculty => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;