import React from 'react';
import { MILESTONES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Department Overview</h1>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl leading-relaxed">
            The Department of Computer Science & Engineering was established to impart quality technical education and skill development in computing and IT, becoming one of the most sought-after programs in Karnataka.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Academic Approach</h2>
              <p className="text-slate-600 leading-relaxed">
                Our program is outcome-based and industry-oriented. We regularly update our curriculum with inputs from industry experts and reputed institutions to ensure our graduates remain competitive in the global tech landscape.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Students are trained through a holistic blend of hands-on learning, self-study, and project-based education. This approach enables them to tackle complex industry and research challenges effectively.
              </p>
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-8">
                <h4 className="font-bold text-indigo-900 mb-2">Centre of Excellence</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-indigo-800">
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-indigo-400"></i> Modern Laboratories</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-indigo-400"></i> Open Source Platforms</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-indigo-400"></i> Industrial Visits</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-indigo-400"></i> Project-Based Learning</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <i className="fas fa-scroll text-indigo-600"></i>
                Department Legacy
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-indigo-100"></div>
                {MILESTONES.map((m, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] bg-white border-4 border-indigo-600 rounded-full z-10"></div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 block mb-1 uppercase tracking-widest">{m.year}</span>
                      <h5 className="font-bold text-slate-900">{m.title}</h5>
                      <p className="text-sm text-slate-500 mt-1">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Ratio Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Dedicated Learning Environment</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Led by Prof. Parashuram Talwar, our department maintains a healthy faculty–student ratio to ensure personalized guidance and holistic learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-800 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Outcome Based</div>
            </div>
            <div className="p-8 border border-slate-800 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">State-Art</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Infrastructure</div>
            </div>
            <div className="p-8 border border-slate-800 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">Industry</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Collaborations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;