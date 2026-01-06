
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="animate-fadeIn py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Student Resources</h1>
          <p className="text-lg text-slate-600 mt-4">Essential documents, syllabus, and guidelines for your academic journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Resource List */}
          <div className="lg:col-span-2 space-y-4">
            {RESOURCES.map(resource => (
              <div key={resource.id} className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between hover:border-indigo-300 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <i className={`fas ${resource.type === 'PDF' ? 'fa-file-pdf' : 'fa-file-word'} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{resource.title}</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                      {resource.type} &bull; {resource.size}
                    </p>
                  </div>
                </div>
                <a 
                  href={resource.url} 
                  className="w-10 h-10 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full flex items-center justify-center transition-all"
                  title="Download"
                >
                  <i className="fas fa-download text-sm"></i>
                </a>
              </div>
            ))}
          </div>

          {/* Quick Help Sidebar */}
          <div className="space-y-8">
            <div className="bg-indigo-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Academic Calendar</h3>
              <p className="text-indigo-300 text-sm mb-6 leading-relaxed">Stay updated with important dates for exams, project submissions, and holidays.</p>
              <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                View Fall 2023 Calendar
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Need More Help?</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Can't find what you're looking for? Our admin office is open Mon-Fri, 9am - 5pm.</p>
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-3"><i className="fas fa-phone text-indigo-600"></i> +1 (234) 567-890</li>
                <li className="flex items-center gap-3"><i className="fas fa-envelope text-indigo-600"></i> support@kpt-cs.edu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
