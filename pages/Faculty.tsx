
import React, { useState } from 'react';
import { FACULTY_DATA } from '../constants';
import { Faculty as FacultyType } from '../types';

const FacultyCard: React.FC<{ faculty: FacultyType }> = ({ faculty }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback avatar if image fails or is missing
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=${faculty.category === 'guest' ? 'cbd5e1' : '6366f1'}&color=${faculty.category === 'guest' ? '475569' : 'fff'}&size=512`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="aspect-[1/1] sm:aspect-[4/5] relative overflow-hidden bg-slate-100">
        <img 
          src={imgError ? avatarUrl : faculty.photo} 
          alt={faculty.name} 
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{faculty.name}</h3>
          <p className="text-indigo-300 text-xs sm:text-sm font-medium mt-1">{faculty.role}</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {faculty.bio}
        </p>
        
        {faculty.researchInterests && faculty.researchInterests.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Areas of Interest</h5>
            <div className="flex flex-wrap gap-1.5">
              {faculty.researchInterests.map((interest, i) => (
                <span key={i} className="text-[10px] sm:text-[11px] bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-semibold border border-indigo-100/50">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {faculty.subjects && faculty.subjects.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Subjects</h5>
            <div className="flex flex-wrap gap-1.5">
              {faculty.subjects.map((subject, i) => (
                <span key={i} className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium border border-slate-200/50">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Faculty: React.FC = () => {
  const hod = FACULTY_DATA.filter(f => f.category === 'hod');
  const permanent = FACULTY_DATA.filter(f => f.category === 'permanent');
  const guest = FACULTY_DATA.filter(f => f.category === 'guest');

  return (
    <div className="animate-fadeIn py-12 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Faculty Directory</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our faculty members are more than educators; they are mentors, researchers, and industry pioneers dedicated to shaping the next generation of computer scientists.
          </p>
        </div>

        {/* HOD Section */}
        {hod.length > 0 && (
          <section className="mb-20 sm:mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-slate-200"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 uppercase tracking-[0.2em] text-xs">Head of Department</h2>
              <div className="h-px flex-grow bg-slate-200"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <FacultyCard faculty={hod[0]} />
              </div>
            </div>
          </section>
        )}

        {/* Permanent Faculty Section */}
        {permanent.length > 0 && (
          <section className="mb-20 sm:mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-slate-200"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 uppercase tracking-[0.2em] text-xs">Permanent Faculty</h2>
              <div className="h-px flex-grow bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {permanent.map(faculty => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </section>
        )}

        {/* Guest Faculty Section */}
        {guest.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-slate-200"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 uppercase tracking-[0.2em] text-xs">Guest Faculty</h2>
              <div className="h-px flex-grow bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
