"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { 
  Play,           
  BookOpen,       
  Stethoscope,    
  ClipboardCheck, 
  ChevronRight 
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const tabs = [
  {
    id: 'intro',
    label: 'SYSTEM OVERVIEW',
    title: 'Student Dashboard',
    desc: 'Your central command center. Access the complete 6-year curriculum, proforma builder, and clinical tools in one unified view.',
    icon: Play,
    src: '/dashboard-overview.mp4' 
  },
  {
    id: 'notes',
    label: 'ACADEMIC SUITE',
    title: 'High-Yield Notes',
    desc: 'Master every subject from Year 1 to 6. Concise, exam-focused notes for Anatomy, Pharmacology, and Therapeutics.',
    icon: BookOpen,
    src: '/academic-suite.mp4' 
  },
  {
    id: 'tools',
    label: 'REAL-TIME SAFETY',
    title: 'Clinical Tools',
    desc: 'Stop guessing. Check Drug Interactions, browse the Drug Index, and calculate renal doses (CrCl) instantly.',
    icon: Stethoscope,
    src: '/clinical-tools.mp4' 
  },
  {
    id: 'proforma',
    label: 'WARD ROUNDS',
    title: 'Proforma Builder',
    desc: 'Automate your case documentation. Input patient history and labs to generate structured SOAP notes effortlessly.',
    icon: ClipboardCheck,
    src: '/proforma-builder.mp4' 
  }
];

// --- SUB-COMPONENTS ---

const MobilePlayer = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full aspect-[16/10] rounded-[14px] shadow-[0_10px_30px_-10px_rgba(20,184,166,0.3)] my-2 ring-1 ring-teal-400/30">
        <div className="w-full h-full bg-white rounded-[13px] p-[2px] overflow-hidden">
            <video key={src} src={src} autoPlay loop muted playsInline className="w-full h-full object-contain bg-white" />
        </div>
    </div>
  );
};

const DesktopPlayer = ({ activeTab }: { activeTab: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }} className="perspective-[1200px] w-full flex justify-center py-12">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full aspect-[16/10] bg-white rounded-[20px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1),0_0_30px_-5px_rgba(20,184,166,0.2)] overflow-hidden ring-1 ring-teal-400/40" 
      >
        <div className="w-full h-full bg-white rounded-[18px] p-[3px] relative overflow-hidden">
             <div className="relative w-full h-full bg-white rounded-[15px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 w-full h-full">
                    <video 
                        autoPlay loop muted playsInline 
                        className="w-full h-full object-contain bg-white" 
                        src={tabs[activeTab].src}
                    />
                  </motion.div>
                </AnimatePresence>
             </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN SYSTEM COMPONENT ---
export default function UnifiedSystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className="relative py-12 lg:py-24 bg-white text-slate-900 overflow-hidden">
      
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#052c2e 1px, transparent 1px), linear-gradient(90deg, #052c2e 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-6 lg:mb-12 max-w-3xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#052C2E] tracking-tight leading-tight">
            The Digital <span className="text-teal-600 font-serif italic">Operating System.</span>
          </h2>
        </div>

        {/* REVERTED TO ORIGINAL GRID: 4 - 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            
          {/* NAVIGATION (Col 4) */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-3">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`relative group text-left p-6 rounded-xl transition-all duration-300 border-2 w-full touch-manipulation flex items-start justify-between ${
                  activeTab === idx
                    ? 'bg-white border-teal-400 shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)] lg:scale-[1.01] z-20' 
                    : 'bg-slate-50 border-transparent lg:hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-4 flex-1">
                    <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        activeTab === idx ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' : 'bg-white border border-slate-200 text-slate-400'
                    }`}>
                        <tab.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        {/* RESTORED ORIGINAL LABEL FONT */}
                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeTab === idx ? 'text-teal-600' : 'text-slate-400'}`}>
                            {tab.label}
                        </div>
                        
                        {/* RESTORED ORIGINAL TITLE FONT */}
                        <div className={`font-bold text-xl leading-tight truncate ${activeTab === idx ? 'text-[#052C2E]' : 'text-slate-400'}`}>
                            {tab.title}
                        </div>
                        
                        {/* RESTORED ORIGINAL DESC FONT */}
                        {activeTab === idx && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                             <p className="text-base text-slate-600 leading-relaxed pr-2 pt-3 block font-medium">
                               {tab.desc}
                             </p>
                          </motion.div>
                        )}
                    </div>
                </div>

                {activeTab === idx && (
                    <div className="shrink-0 pt-2 text-[#052C2E]">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                )}
              </button>
            ))}
          </div>

          {/* SCREEN (Col 8) */}
          <div className="order-1 lg:order-2 lg:col-span-8 w-full relative flex items-center justify-center">
            {isMobile ? <MobilePlayer src={tabs[activeTab].src} /> : <DesktopPlayer activeTab={activeTab} />}
          </div>

        </div>
      </div>
    </section>
  );
}
