
import React, { useState } from 'react';
import { FACULTY_DATA } from '../constants';

const Faculty: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('All');

  const departments = ['All', ...new Set(FACULTY_DATA.map(f => f.department))];

  const filteredFaculty = FACULTY_DATA.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         f.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === 'All' || f.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="animate-fadeIn py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Faculty Directory</h1>
          <p className="text-lg text-slate-600 mt-4">Meet the brilliant minds driving our department forward.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDept(dept)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  filterDept === dept 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map(faculty => (
              <div key={faculty.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={faculty.photo} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
                    <p className="text-indigo-300 text-sm font-medium">{faculty.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">
                      {faculty.department}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {faculty.bio}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Research Interests</h5>
                    <div className="flex flex-wrap gap-2">
                      {faculty.researchInterests.map((interest, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <a href={`mailto:${faculty.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <i className="fas fa-envelope mr-2"></i>
                      <span className="text-xs">{faculty.email}</span>
                    </a>
                    <button className="text-indigo-600 text-xs font-bold hover:underline">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <i className="fas fa-users-slash text-4xl text-slate-300 mb-4"></i>
            <h3 className="text-xl font-bold text-slate-900">No faculty members found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faculty;
