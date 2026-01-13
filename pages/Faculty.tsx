import React, { useState } from 'react';
import { FACULTY_DATA } from '../constants';
import { Faculty as FacultyType } from '../types';

/**
 * FacultyCard Component
 * Enhanced with more "looks" and premium transitions.
 */
const FacultyCard: React.FC<{ faculty: FacultyType; delay?: string }> = ({ faculty, delay = '0ms' }) => {
  const [imgError, setImgError] = useState(false);

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=${
    faculty.category === 'guest' ? 'cbd5e1' : '6366f1'
  }&color=${faculty.category === 'guest' ? '475569' : 'fff'}&size=512`;

  return (
    <div 
      className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] transition-all duration-500 group flex flex-col h-full shadow-sm hover:-translate-y-2 animate-fadeIn"
      style={{ animationDelay: delay }}
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
        <img 
          src={imgError ? fallbackAvatar : (faculty.photo || fallbackAvatar)} 
          alt={faculty.name} 
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent p-6 pt-12 backdrop-blur-[2px] flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{faculty.name}</h3>
          <p className="text-indigo-300 text-xs font-black tracking-[0.15em] mt-1.5 uppercase drop-shadow-sm">{faculty.role}</p>
        </div>
        
        {/* Quick status badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-indigo-600 shadow-sm uppercase tracking-widest border border-white">
            View Bio
          </div>
        </div>
      </div>
      
      <div className="p-7 flex-grow flex flex-col bg-white">
        <p className="text-sm text-slate-500 mb-8 leading-relaxed italic line-clamp-3">
          "{faculty.bio}"
        </p>
        
        {/* Expertise / Interests */}
        {(faculty.researchInterests || faculty.subjects) && (
          <div className="mt-auto pt-6 border-t border-slate-50">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-4">
              {faculty.category === 'guest' ? 'Course Focus' : 'Specialization'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {(faculty.researchInterests || faculty.subjects || []).map((item, i) => (
                <span 
                  key={i} 
                  className={`text-[10px] px-3.5 py-1.5 rounded-xl font-bold border transition-colors duration-300 ${
                    faculty.category === 'guest' 
                      ? 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100' 
                      : 'bg-indigo-50/50 text-indigo-700 border-indigo-100 hover:bg-indigo-100/50'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * SectionHeader Component
 */
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-6 mb-20">
    <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-indigo-100 to-indigo-100 rounded-full"></div>
    <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.5em] whitespace-nowrap">{title}</h2>
    <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-indigo-100 to-indigo-100 rounded-full"></div>
  </div>
);

const Faculty: React.FC = () => {
  const hod = FACULTY_DATA.filter(f => f.category === 'hod');
  const permanent = FACULTY_DATA.filter(f => f.category === 'permanent');
  const guest = FACULTY_DATA.filter(f => f.category === 'guest');

  return (
    <div className="animate-fadeIn py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-28 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px]">Excellence in Leadership</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mt-2 mb-10 tracking-tight">
            Academic <span className="text-indigo-600">Pillars</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-normal">
            Our faculty combines profound theoretical knowledge with real-world industry experience to guide students 
            through the complexities of modern computing.
          </p>
        </div>

        {/* HOD Section */}
        {hod.length > 0 && (
          <section className="mb-40">
            <SectionHeader title="Leadership" />
            <div className="flex justify-center">
              <div className="w-full max-w-md transform transition-all">
                <FacultyCard faculty={hod[0]} delay="100ms" />
              </div>
            </div>
          </section>
        )}

        {/* Permanent Faculty Section */}
        {permanent.length > 0 && (
          <section className="mb-40">
            <SectionHeader title="Core Faculty" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {permanent.map((faculty, idx) => (
                <FacultyCard key={faculty.id} faculty={faculty} delay={`${(idx + 1) * 150}ms`} />
              ))}
            </div>
          </section>
        )}

        {/* Guest Faculty Section */}
        {guest.length > 0 && (
          <section>
            <SectionHeader title="Guest Scholars" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {guest.map((faculty, idx) => (
                <FacultyCard key={faculty.id} faculty={faculty} delay={`${(idx + 1) * 100}ms`} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Faculty;