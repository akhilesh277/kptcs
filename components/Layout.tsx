import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Faculty', id: 'faculty' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
              <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                K
              </div>
              <span className="font-black text-2xl tracking-tighter hidden sm:block">
                KPT <span className="text-indigo-600">CS</span>
              </span>
            </div>
            
            <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === item.id
                      ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl">K</div>
              <h3 className="text-white font-black text-2xl tracking-tighter">KPT Computer Science</h3>
            </div>
            <p className="max-w-md text-slate-500 leading-relaxed font-medium">
              Shaping the next generation of engineers with rigorous academic standards and an innovation-first mindset.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-400 transition-colors">Department History</button></li>
              <li><button onClick={() => setActiveTab('faculty')} className="hover:text-indigo-400 transition-colors">Meet the Pillars</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-indigo-400 transition-colors">Study Vault</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Coordinates</h4>
            <address className="text-sm not-italic leading-relaxed font-medium">
              Engineering Block 7, Level 5<br />
              KPT Campus, Mangaluru<br />
              <span className="block mt-4 text-indigo-400 font-bold">cs.dept@kpt.edu.in</span>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <span>&copy; {new Date().getFullYear()} KPT Department of Computer Science</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <a href="#" className="hover:text-slate-400">Terms</a>
            <a href="#" className="hover:text-slate-400">Accreditation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;