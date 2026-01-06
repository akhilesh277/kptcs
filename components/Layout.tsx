
import React, { useState } from 'react';

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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="font-bold text-xl tracking-tight hidden md:block">
                KPT <span className="text-indigo-600">Computer Science</span>
              </span>
            </div>
            
            <div className="flex space-x-1 md:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
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
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4 italic">Empowering Tomorrow's Innovators</h3>
            <p className="max-w-md text-slate-400">
              The Department of Computer Science at KPT is dedicated to excellence in teaching and pioneering research that shapes the future of technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-400">About Dept</button></li>
              <li><button onClick={() => setActiveTab('faculty')} className="hover:text-indigo-400">Faculty Directory</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-indigo-400">Student Resources</button></li>
              <li><a href="#" className="hover:text-indigo-400">University Portal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <address className="text-sm not-italic text-slate-400">
              KPT Engineering Block<br />
              Cyber Hub, 5th Floor<br />
              Innovation City, 44021<br />
              <span className="block mt-2">info@kpt-cs.edu</span>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} KPT Department of Computer Science. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
