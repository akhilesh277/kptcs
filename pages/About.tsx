
import React from 'react';
import { MILESTONES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900">About the Department</h1>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl">
            Established in 2005, the KPT Computer Science Department has grown from a small initiative into a powerhouse of technical education and research.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Academic Philosophy</h2>
              <p className="text-slate-600 leading-relaxed">
                At KPT CS, we believe that education should be as dynamic as the field itself. Our curriculum is reviewed annually by a board of industry experts from companies like Google, Microsoft, and Tesla to ensure our students are learning the most relevant skills.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We prioritize "learning by doing." From their first semester, students engage in project-based courses where they build real-world applications, contribute to open-source software, and participate in collaborative research with faculty.
              </p>
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-8">
                <h4 className="font-bold text-indigo-900 mb-2">Our Core Values</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-indigo-800">
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle opacity-70"></i> Intellectual Integrity</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle opacity-70"></i> Social Responsibility</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle opacity-70"></i> Relentless Innovation</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle opacity-70"></i> Inclusive Community</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <i className="fas fa-history text-indigo-600"></i>
                Department Milestones
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200"></div>
                {MILESTONES.map((m, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] bg-white border-4 border-indigo-600 rounded-full z-10"></div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 block mb-1">{m.year}</span>
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

      {/* Facilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">World-Class Facilities</h2>
            <p className="text-slate-600 mt-4">Where theory meets the practical world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Research Lab', icon: 'fa-brain' },
              { title: 'Cyber Ops Center', icon: 'fa-shield-halved' },
              { title: 'Data Center', icon: 'fa-server' },
              { title: 'Makerspace', icon: 'fa-hammer' }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                  <i className={`fas ${f.icon} text-2xl`}></i>
                </div>
                <h4 className="font-bold">{f.title}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">Equipped with the latest hardware and industrial-grade software tools.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
