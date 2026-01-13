import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-950">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 animate-pulse" 
          style={{ animationDuration: '8s' }}
          alt="Tech Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.15),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Next Gen Education
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Code. Create. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Conquer.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
              KPT Computer Science Department is where advanced engineering meets creative problem solving. Join the elite.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/25 hover:scale-105 active:scale-95">
                Explore Programs
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold backdrop-blur-md transition-all border border-white/10 hover:border-white/20">
                View Faculty
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'fa-graduation-cap', title: 'Academic Excellence', desc: '95% placement rate at top global tech firms like Google and Microsoft.', color: 'indigo' },
              { icon: 'fa-microscope', title: 'Pioneering Research', desc: 'Cutting-edge development in AI ethics, Blockchain, and Quantum security.', color: 'cyan' },
              { icon: 'fa-users', title: 'Global Community', desc: 'A network of 2,500+ successful alumni leading innovations worldwide.', color: 'indigo' }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50">
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center text-${item.color}-600 mb-8 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                  <i className={`fas ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <span className="text-indigo-400 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Core DNA</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-10 tracking-tight leading-tight">Forging the <br/>Digital Frontier.</h2>
            <div className="space-y-10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs border border-indigo-500/30">1</div>
                <h4 className="text-xl font-bold mb-3 text-indigo-100">Our Mission</h4>
                <p className="text-slate-400 leading-relaxed">To integrate rigorous theoretical foundations with aggressive practical industry application, fostering ethical tech leadership.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs border border-cyan-500/30">2</div>
                <h4 className="text-xl font-bold mb-3 text-cyan-100">Our Vision</h4>
                <p className="text-slate-400 leading-relaxed">To remain the gold standard for computer science education, creating impact that resonates across the global technology landscape.</p>
              </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
             <div className="relative aspect-square bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-700 group-hover:scale-110" alt="Vision" />
               <div className="absolute inset-0 flex items-center justify-center p-16 text-center italic text-3xl font-extralight text-white leading-relaxed">
                 "Technology is the ultimate leverage for human creativity."
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black tracking-tight">Intelligence Stream</h2>
              <p className="text-slate-500 mt-2 font-medium">Critical updates and department movements.</p>
            </div>
            <button className="text-indigo-600 font-bold hover:underline tracking-tight">Full Archive <i className="fas fa-arrow-right text-xs ml-1"></i></button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ANNOUNCEMENTS.map(announcement => (
              <div key={announcement.id} className="p-8 rounded-[2rem] border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    {announcement.category}
                  </span>
                  <div className="h-px flex-grow bg-slate-100"></div>
                </div>
                <p className="text-[10px] text-slate-400 mb-2 font-black uppercase tracking-widest">{announcement.date}</p>
                <h4 className="text-xl font-bold mb-4 tracking-tight line-clamp-2">{announcement.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-medium">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;