import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  // Website must always open in Light Mode (false) first.
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBookCursor, setIsBookCursor] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isBookCursor) {
      document.documentElement.classList.add('book-cursor-active');
    } else {
      document.documentElement.classList.remove('book-cursor-active');
    }
  }, [isBookCursor]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleCursor = () => setIsBookCursor(!isBookCursor);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Faculty', id: 'faculty' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  const logoUrl = "https://gpt.karnataka.gov.in/kptmangalore/public/uploads/dept_logo1755926888.jpg";

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Navigation - Medium Cyan Gradient Background */}
      <nav className="sticky top-0 z-50 border-b border-cyan-600/20 bg-gradient-to-r from-cyan-700 via-cyan-600 to-teal-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <img 
                src={logoUrl} 
                alt="KPT Logo" 
                className="h-12 w-auto object-contain bg-white rounded-md p-0.5 shadow-md border border-white/20" 
              />
              <div className="flex flex-col leading-tight hidden md:block">
                <span className="font-bold text-lg tracking-tight text-white">Karnataka (Govt.) Polytechnic</span>
                <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-widest">  Computer Science</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="hidden sm:flex space-x-1 md:space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-bold transition-all ${
                      activeTab === item.id
                        ? 'bg-white/20 text-white shadow-sm'
                        : 'text-cyan-50 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile items condensed */}
              <div className="sm:hidden flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-2 rounded-md transition-colors ${
                      activeTab === item.id ? 'text-white bg-white/20' : 'text-cyan-100 hover:text-white'
                    }`}
                  >
                    <i className={`fas ${
                      item.id === 'home' ? 'fa-home' : 
                      item.id === 'about' ? 'fa-info-circle' :
                      item.id === 'faculty' ? 'fa-users' :
                      item.id === 'resources' ? 'fa-book' : 'fa-envelope'
                    } text-lg`}></i>
                  </button>
                ))}
              </div>

              <div className="flex items-center border-l border-white/20 ml-2 pl-2 gap-1">
                {/* Book Cursor Toggle */}
                <button 
                  onClick={toggleCursor}
                  className={`p-2 rounded-full transition-all flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-tighter ${
                    isBookCursor 
                    ? 'bg-white text-cyan-700 shadow-inner' 
                    : 'text-cyan-50 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-label="Toggle Book Cursor"
                  title="Toggle Book Cursor"
                >
                  <i className="fas fa-book-open"></i>
                </button>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-cyan-50 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"
                  aria-label="Toggle Theme"
                  title="Toggle Theme"
                >
                  {isDarkMode ? (
                    <i className="fas fa-sun text-lg text-yellow-300"></i>
                  ) : (
                    <i className="fas fa-moon text-lg"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow transition-colors duration-300">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-black text-slate-700 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="Logo" className="h-8 dark:brightness-0 dark:invert" />
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">KPT Mangalore College</h3>
            </div>
            <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm">
              Department of Computer Science & Engineering. Delivering quality technical education and fostering skill development to meet industry challenges.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">Vision & Mission</button></li>
              <li><button onClick={() => setActiveTab('faculty')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">Our Faculty</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-indigo-600 dark:hover:text-white transition-colors">Study Materials</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">College Info</h4>
            <address className="text-sm not-italic text-slate-600 dark:text-slate-400 space-y-2">
              <p>KPT Mangalore College</p>
              <p>KPT Junction, Mangalore, Karnataka 575004</p>
              <p className="font-medium text-indigo-600 dark:text-indigo-400">kptmng@gmail.com</p>
              <div className="pt-2 text-xs">
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Holiday</p>
              </div>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} KPT Mangalore • Computer Science Department
        </div>
      </footer>
    </div>
  );
};

export default Layout;