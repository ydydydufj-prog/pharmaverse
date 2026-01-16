"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronRight } from 'lucide-react';

const StudentStruggle = () => {
  const [activeTab, setActiveTab] = useState(0);

  const struggles = [
    {
      id: 'resources',
      title: 'Scattered Resources',
      desc: 'Stop juggling PDFs and textbooks. Centralize everything you need into a single, structured clinical workflow.',
    },
    {
      id: 'time',
      title: 'Time Pressure',
      desc: 'The syllabus is heavy. Master complex pharmacy topics faster with high-precision study frameworks.',
    },
    {
      id: 'clinical',
      title: 'Clinical Overwhelm',
      desc: 'Transition smoothly from classroom theory to high-stakes hospital reality without the confusion.',
    }
  ];

  return (
    /* 
       Adjusted Padding for Sheet Effect: 
       I kept the original padding values (pt-24) but removed the excess 
       from the desktop (md:pt-36 -> md:pt-24) so it fits snugly after the ticker.
    */
    <section className="relative w-full pt-20 pb-12 md:pt-24 md:pb-20 bg-white px-4 md:px-6 font-sans antialiased overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. HEADER (Restored Original Sizes) */}
        <header className="flex flex-col items-center text-center mb-8 md:mb-16">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: 80 }} 
              className="h-[4px] bg-teal-500 mb-4 md:mb-6 rounded-full" 
            />
            <h2 className="text-[2rem] md:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
              The Pharmacy <span className="text-teal-600 font-serif italic">Student Struggle</span>
            </h2>
            <p className="mt-4 md:mt-6 text-slate-500 max-w-2xl text-base md:text-xl leading-relaxed">
                Your curriculum is demanding. Your study tools shouldn't make it harder.
            </p>
        </header>

        {/* 2. MAIN VISUAL IMAGE (Restored Original Colors/Style) */}
        <div className="relative mb-10 md:mb-16 flex justify-center">
          <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 p-2 md:p-3 shadow-2xl shadow-slate-200/50">
            
            {/* Fake Browser Bar (Restored Colored Dots) */}
            <div className="hidden md:flex items-center gap-2 mb-2 border-b border-slate-50 pb-3 px-6 pt-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                  <div className="w-3 h-3 rounded-full bg-green-400/20" />
                </div>
                <div className="w-40 h-2 bg-slate-100 rounded-full ml-4" />
            </div>

            {/* IMAGE CONTAINER */}
            <div className="relative aspect-[4/4.5] md:aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-inner group">
              
              <img 
                src="/StudentStruggle.png" 
                alt="Pharmacy Student Desk Mess" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* FLOATING CARD (Original Mobile Optimized spacing) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="absolute bottom-3 left-3 right-3 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-xl p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] border border-white/50 max-w-[460px]"
              >
                <div className="flex items-center md:items-start gap-3 md:gap-4 mb-2 md:mb-4">
                  <div className="bg-orange-50 h-9 w-9 md:h-12 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center text-orange-500 shadow-sm border border-orange-100 shrink-0">
                     <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-base md:text-xl leading-none mb-0.5 md:mb-1">Efficiency Leak</h4>
                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-wider font-semibold">Diagnosis Detected</p>
                  </div>
                </div>
                
                <p className="text-slate-700 text-[13.5px] md:text-base leading-snug md:leading-relaxed font-medium">
                  Students spend <span className="text-orange-600 font-bold bg-orange-50 px-1 rounded">~40% of their study time</span> just finding the right page, instead of learning.
                </p>

                {/* Progress Bar */}
                <div className="w-full h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden mt-3 md:mt-6">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-orange-500 rounded-full" 
                    />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. TABS SECTION (Original Grid Logic) */}
        <div className="max-w-6xl mx-auto border-t border-slate-200 relative z-10">
          
          {/* MOBILE LIST */}
          <div className="flex flex-col md:hidden divide-y divide-slate-100">
             {struggles.map((s, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={`py-5 px-3 transition-all duration-300 ${activeTab === i ? 'bg-slate-50' : 'active:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-lg font-bold transition-colors ${activeTab === i ? 'text-teal-700' : 'text-slate-700'}`}>
                        {s.title}
                    </h3>
                    <div className={`transition-transform duration-300 ${activeTab === i ? 'rotate-90 text-teal-600' : 'text-slate-300'}`}>
                        <ChevronRight size={20} />
                    </div>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeTab === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                       <p className="text-[15px] text-slate-600 leading-relaxed font-medium pt-1">
                          {s.desc}
                       </p>
                       <div className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-teal-600">
                          <span>See Solution</span> <ChevronRight size={14} />
                       </div>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          {/* DESKTOP GRID (Original Spacing and Weights) */}
          <div className="hidden md:grid md:grid-cols-3">
            {struggles.map((s, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveTab(i)}
                className="relative pt-10 pb-12 px-8 cursor-pointer group"
              >
                <div className={`absolute top-0 left-0 right-0 h-[4px] transition-all duration-300 ${activeTab === i ? 'bg-teal-500 shadow-[0_4px_20px_rgba(20,184,166,0.4)]' : 'bg-transparent group-hover:bg-slate-100'}`} />
                
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${activeTab === i ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                   {s.title}
                </h3>
                
                <p className={`text-lg leading-relaxed transition-all duration-300 ${activeTab === i ? 'text-slate-600 font-medium opacity-100 translate-y-0' : 'text-slate-400 opacity-60 translate-y-1'}`}>
                  {s.desc}
                </p>

                <div className={`mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal-600 transition-all duration-300 ${activeTab === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                   <span>See Solution</span> <ChevronRight size={16} />
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-b from-slate-50/80 to-transparent opacity-0 transition-opacity duration-300 -z-10 ${activeTab === i ? 'opacity-100' : 'group-hover:opacity-50'}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentStruggle;
