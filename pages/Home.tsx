import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section - Now Theme Aware */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img 
          src="https://gpt.karnataka.gov.in/kptmangalore/public/uploads/media_to_upload1754900948.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-30" 
          alt="Technical Education" 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Official Web Portal</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Computer Science & Engineering<br />
              <span className="text-indigo-600 dark:text-indigo-400">KPT Mangalore</span>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl">
              Imparting quality technical education and skill development in computing to meet industry and research challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://gpt.karnataka.gov.in/kptmangalore/public/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                <i className="fas fa-external-link-alt text-sm"></i>
                Visit Official KPT Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Industry Oriented</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Regularly updated syllabus with inputs from industry experts and reputed institutions.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Outcome Based</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Students are trained through hands-on learning, self-study, and project-based education.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Modern Labs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Equipped with modern laboratories and access to open-source platforms for learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Campus Image Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white text-center">Our Campus</h2>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src="https://gpt.karnataka.gov.in/kptmangalore/public/uploads/media_to_upload1754900948.jpg" 
                alt="KPT Mangalore Campus" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-100 dark:bg-black text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-indigo-500 rounded-full"></div>
                Vision
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                To achieve leadership in the field of Computer Science & Engineering by strengthening fundamentals and facilitating interdisciplinary sustainable research to meet the ever-growing needs of the society.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-indigo-500 rounded-full"></div>
                Mission
              </h2>
              <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-400 list-none p-0">
                <li className="flex gap-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">01.</span>
                  Evolve continually as a centre of excellence in quality education.
                </li>
                <li className="flex gap-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">02.</span>
                  Develop state-of-the-art infrastructure for research.
                </li>
                <li className="flex gap-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">03.</span>
                  Collaborate with industries to enhance research in emerging areas.
                </li>
                <li className="flex gap-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">04.</span>
                  Develop professionals with ethical and societal values.
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center opacity-10 dark:opacity-20">
            <i className="fas fa-microchip text-[12rem] text-indigo-500"></i>
          </div>
        </div>
      </section>
      

      {/* Updates */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Academic Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map(item => (
              <div key={item.id} className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors shadow-sm bg-slate-50 dark:bg-slate-900">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">{item.date}</span>
                <h4 className="font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;