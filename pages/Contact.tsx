import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fadeIn py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Contact Information</h1>
          <p className="text-slate-500 mt-4 text-lg">Official communication channels for KPT Mangalore College.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Official Info */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <i className="fas fa-university text-indigo-400"></i>
              College Office
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-indigo-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-indigo-300 mb-2">Location</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    KPT Mangalore College<br />
                    KPT Junction, Mangalore<br />
                    Karnataka, 575004
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-clock text-indigo-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-indigo-300 mb-2">Timing</h4>
                  <div className="text-slate-300 text-sm space-y-1">
                    <p>Monday — Saturday</p>
                    <p className="text-white font-bold text-lg">9:00 AM - 5:00 PM</p>
                    <p className="text-red-400 italic pt-1 text-xs font-semibold">Sunday:holiday</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-indigo-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-indigo-300 mb-2">Email</h4>
                  <p className="text-white font-bold text-lg lowercase">kptmng@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visitor Guidelines */}
          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm h-full">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-b border-slate-100 pb-4">Visitor Guidelines</h3>
              <ul className="space-y-5 text-sm text-slate-600">
                <li className="flex gap-4">
                  <i className="fas fa-check-circle text-indigo-600 mt-1 shrink-0"></i>
                  <span>Please visit the college during official working hours for all administrative and admission queries.</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-check-circle text-indigo-600 mt-1 shrink-0"></i>
                  <span>The Computer Science department office is located on the second floor of the main block.</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-check-circle text-indigo-600 mt-1 shrink-0"></i>
                  <span>Ensure all documented requests are sent strictly to our official Gmail address.</span>
                </li>
                <li className="flex gap-4">
                  <i className="fas fa-check-circle text-indigo-600 mt-1 shrink-0"></i>
                  <span>Students are requested to check the department notice board regularly for updates.</span>
                </li>
              </ul>
              
              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Office Administration</p>
                <p className="text-sm font-bold text-slate-900 mt-1">KPT Mangalore College Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
