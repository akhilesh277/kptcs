import React from 'react';
import { RESOURCES, SYLLABUS_AREAS } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="animate-fadeIn py-16 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Academic Resources</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">Program materials designed to balance theoretical concepts with practical applications.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Resource List */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white">
                <i className="fas fa-book-open text-indigo-600"></i>
                Syllabus Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SYLLABUS_AREAS.map((area, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white">
                <i className="fas fa-download text-indigo-600"></i>
                Downloads
              </h3>
              <div className="space-y-4">
                {RESOURCES.map(resource => (
                  <div key={resource.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-indigo-300 transition-all group shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <i className={`fas ${resource.type === 'PDF' ? 'fa-file-pdf' : 'fa-file-word'} text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{resource.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tighter">
                          {resource.type} &bull; {resource.size}
                        </p>
                      </div>
                    </div>
                    <a 
                      href={resource.url} 
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-full flex items-center justify-center transition-all dark:text-slate-300"
                      title="Download"
                    >
                      <i className="fas fa-download text-sm"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Help Sidebar */}
          <div className="space-y-8">
            <div className="bg-indigo-900 dark:bg-indigo-950 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Training & Projects</h3>
              <p className="text-indigo-200 text-sm mb-6 leading-relaxed">
                The curriculum emphasizes hands-on labs, industrial visits, internships, and project-based learning to bridge the gap with real-world IT practices.
              </p>
              <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                View Internship Manual
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Support</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">Personalized guidance for all Computer Science majors through our dedicated faculty team.</p>
              <ul className="space-y-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3"><i className="fas fa-laptop-house text-indigo-600"></i> Open-Source Lab Access</li>
                <li className="flex items-center gap-3"><i className="fas fa-chalkboard-teacher text-indigo-600"></i> Seminar Guidance</li>
                <li className="flex items-center gap-3"><i className="fas fa-envelope text-indigo-600"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;