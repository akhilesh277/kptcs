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
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <img src={logoUrl} alt="KPT Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col leading-tight hidden md:block">
                <span className="font-bold text-lg tracking-tight dark:text-white">KPT Mangalore</span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest">  Computer Science</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="hidden sm:flex space-x-1 md:space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                        : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-50 dark:hover:bg-slate-800'
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
                      activeTab === item.id ? 'text-indigo-600' : 'text-slate-500'
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

              <div className="flex items-center border-l border-slate-200 dark:border-slate-700 ml-2 pl-2 gap-1">
                {/* Book Cursor Toggle */}
                <button 
                  onClick={toggleCursor}
                  className={`p-2 rounded-full transition-all flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-tighter ${
                    isBookCursor 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  aria-label="Toggle Book Cursor"
                  title="Toggle Book Cursor"
                >
                  <i className="fas fa-book-open"></i>
                  <span className="hidden lg:inline">Cursor</span>
                </button>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                  aria-label="Toggle Theme"
                  title="Toggle Theme"
                >
                  {isDarkMode ? (
                    <i className="fas fa-sun text-lg text-yellow-400"></i>
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
      <main className="flex-grow dark:bg-slate-950">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="Logo" className="h-8 brightness-0 invert" />
              <h3 className="text-white font-bold text-lg">KPT Mangalore College</h3>
            </div>
            <p className="max-w-md text-slate-400 text-sm">
              Department of Computer Science & Engineering. Delivering quality technical education and fostering skill development to meet industry challenges.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">Vision & Mission</button></li>
              <li><button onClick={() => setActiveTab('faculty')} className="hover:text-white transition-colors">Our Faculty</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-white transition-colors">Study Materials</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">College Info</h4>
            <address className="text-sm not-italic text-slate-400 space-y-2">
              <p>KPT Mangalore College</p>
              <p>KPT Junction, Mangalore, Karnataka 575004</p>
              <p className="font-medium text-indigo-400">kptmng@gmail.com</p>
              <div className="pt-2 text-xs">
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Holiday</p>
              </div>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-500 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} KPT Mangalore • Computer Science Department
        </div>
      </footer>
    </div>
  );
};

export default Layout;