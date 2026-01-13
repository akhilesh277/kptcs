
import React, { useState } from 'react';
import { FACULTY_DATA } from '../constants';
import { Faculty as FacultyType } from '../types';

/**
 * FacultyCard Component
 * Displays faculty information with an elegant design and robust image fallbacks.
 */
const FacultyCard: React.FC<{ faculty: FacultyType }> = ({ faculty }) => {
  const [imgError, setImgError] = useState(false);

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=${
    faculty.category === 'guest' ? 'cbd5e1' : '6366f1'
  }&color=${faculty.category === 'guest' ? '475569' : 'fff'}&size=512`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col h-full shadow-sm hover:-translate-y-1">
      <div className="aspect-[4/5] relative overflow-hidden bg-slate-50">
        <img 
          src={imgError ? fallbackAvatar : (faculty.photo || fallbackAvatar)} 
          alt={faculty.name} 
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{faculty.name}</h3>
          <p className="text-indigo-300 text-sm font-semibold tracking-wide mt-1 uppercase">{faculty.role}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col bg-white">
        <p className="text-sm text-slate-500 mb-6 leading-relaxed italic">
          "{faculty.bio}"
        </p>
        
        {/* Expertise / Interests */}
        {(faculty.researchInterests || faculty.subjects) && (
          <div className="mt-auto pt-5 border-t border-slate-100">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
              {faculty.category === 'guest' ? 'Curriculum Focus' : 'Expertise'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {(faculty.researchInterests || faculty.subjects || []).map((item, i) => (
                <span 
                  key={i} 
                  className={`text-[11px] px-3 py-1 rounded-full font-bold border ${
                    faculty.category === 'guest' 
                      ? 'bg-slate-50 text-slate-600 border-slate-200' 
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
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
 * Consistent labeling for faculty categories.
 */
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-6 mb-16">
    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-200 to-slate-200"></div>
    <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">{title}</h2>
    <div className="h-px flex-grow bg-gradient-to-l from-transparent via-slate-200 to-slate-200"></div>
  </div>
);

const Faculty: React.FC = () => {
  const hod = FACULTY_DATA.filter(f => f.category === 'hod');
  const permanent = FACULTY_DATA.filter(f => f.category === 'permanent');
  const guest = FACULTY_DATA.filter(f => f.category === 'guest');

  return (
    <div className="animate-fadeIn py-20 lg:py-32 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Excellence in Education</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mt-4 mb-8 tracking-tight">
            Our Distinguished <span className="text-indigo-600">Faculty</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Dedicated mentors and industry pioneers shaping the next generation of software engineers, 
            cybersecurity experts, and technical innovators.
          </p>
        </div>

        {/* HOD Section */}
        {hod.length > 0 && (
          <section className="mb-32">
            <SectionHeader title="Leadership" />
            <div className="flex justify-center">
              <div className="w-full max-w-md transform transition-all hover:scale-[1.02]">
                <FacultyCard faculty={hod[0]} />
              </div>
            </div>
          </section>
        )}

        {/* Permanent Faculty Section */}
        {permanent.length > 0 && (
          <section className="mb-32">
            <SectionHeader title="Core Academic Team" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {permanent.map(faculty => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </section>
        )}

        {/* Guest Faculty Section */}
        {guest.length > 0 && (
          <section>
            <SectionHeader title="Guest Lecturers" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {guest.map(faculty => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Faculty;
