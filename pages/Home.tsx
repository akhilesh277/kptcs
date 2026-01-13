
import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://picsum.photos/seed/tech/1600/900" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="Tech Background" 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Innovating at the <span className="text-indigo-400">Speed of Thought.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              KPT Computer Science Department is a hub for cutting-edge research, academic excellence, and the next generation of tech leaders.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Explore Programs
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all border border-white/30">
                View Faculty
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-slate-600">Over 95% placement rate within 6 months of graduation at top global tech firms.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-microscope text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Pioneering Research</h3>
              <p className="text-slate-600">Active research in AI ethics, decentralized finance, and secure computing architectures.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Community</h3>
              <p className="text-slate-600">Vibrant alumni network of 2,500+ professionals across 30+ countries worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl font-bold mt-4 mb-8">Building the Future of Digital Existence</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-sm">1</span>
                  Our Mission
                </h4>
                <p className="text-slate-300 ml-11">To provide world-class education that integrates deep theoretical knowledge with practical industry expertise, fostering innovation and ethical leadership in the digital age.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-sm">2</span>
                  Our Vision
                </h4>
                <p className="text-slate-300 ml-11">To be a globally recognized center of excellence in computer science, creating impactful technologies that solve complex societal challenges and advance human progress.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-indigo-800 rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/seed/vision/800/800" className="w-full h-full object-cover mix-blend-overlay opacity-60" alt="Vision" />
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center italic text-2xl font-light">
                 "Technology is most powerful when it empowers every individual to create without boundaries."
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">Latest Updates</h2>
              <p className="text-slate-500 mt-2">Important announcements and upcoming events.</p>
            </div>
            <button className="text-indigo-600 font-semibold hover:underline">View All News</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map(announcement => (
              <div key={announcement.id} className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-100 text-slate-600 mb-4 inline-block`}>
                  {announcement.category}
                </span>
                <p className="text-xs text-slate-400 mb-2 font-medium">{announcement.date}</p>
                <h4 className="text-lg font-bold mb-3">{announcement.title}</h4>
                <p className="text-sm text-slate-600 line-clamp-2">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
