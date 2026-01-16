"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'ABDUL THALHA', role: 'PHARM.D 5TH YEAR', quote: "Hospital rounds are finally manageable. Having precise clinical notes on my phone is like having a senior mentor right in my pocket." },
  { name: 'ANUNAYA', role: 'PHARM.D 4TH YEAR', quote: "The clinical tools are my daily essentials. I’ve stopped just memorizing guidelines and finally started understanding patient care." },
  { name: 'FARNAZ FATIMA', role: 'PHARM.D 4TH YEAR', quote: "It turned heavy textbooks into smart, bite-sized notes. Humanized and simple to digest during busy hospital shifts." },
  { name: 'SYAMA', role: 'PHARM.D 5TH YEAR', quote: "An essential OS for pharmacy students. It saves hours of research by putting everything into one streamlined clinical dashboard." },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => { setDirection(1); setCurrentIndex((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  return (
    <section className="w-full h-full flex items-center justify-center font-mona bg-white py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Restore large original typography */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
               <span className="w-10 h-[1px] bg-teal-600/30" />
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-600">Student Stories</p>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-[#0d4444] leading-[1.05] tracking-tighter">
              Trusted by the next <br /> 
              <span className="text-slate-400 italic font-medium">generation of Doctors.</span>
            </h3>
            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-[#0d4444] transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-[#0d4444] transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: Precise text scale for quotes */}
          <div className="lg:col-span-7 h-[300px] flex items-center border-l border-slate-100 pl-0 lg:pl-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-10 h-10 text-orange-500/20 mb-6" />
                <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug mb-10 tracking-tight" style={{ fontVariationSettings: "'wght' 600" }}>
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-[#0d4444] text-white flex items-center justify-center font-black text-sm">{testimonials[currentIndex].name.charAt(0)}</div>
                   <div>
                      <h4 className="text-[13px] font-black text-[#0d4444] tracking-wider uppercase">{testimonials[currentIndex].name}</h4>
                      <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PROGRESS NAVIGATION */}
        <div className="mt-16 flex gap-2">
          {testimonials.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === currentIndex ? 'w-10 bg-[#0d4444]' : 'w-3 bg-slate-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
