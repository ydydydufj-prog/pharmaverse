'use client';
// 1. ADDED useRef to this line 👇
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current;
    
    // 1. Detect Scroll Direction
    if (latest > previous && latest > 150) {
      // Scrolling DOWN and past hero -> Hide Header
      setIsHidden(true);
    } else {
      // Scrolling UP -> Show Header
      setIsHidden(false);
    }

    // 2. Detect Transparency Logic
    setIsScrolled(latest > 20);
    
    lastYRef.current = latest;
  });

  return (
    <motion.header 
      // ANIMATION LOGIC: Slides up (-100%) to hide, Slides to 0 to show
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-2 shadow-sm' 
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-12">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 transition-transform hover:scale-[1.01] active:scale-95"
          onClick={() => setIsMobileMenuOpen(false)}
        >
           <Image 
             src="/logo.png" 
             alt="Pharmaverse Logo" 
             width={32} 
             height={32} 
             className="object-contain"
             priority
           />
           <span className={`font-bold text-lg tracking-tight ${
             isScrolled ? 'text-slate-900' : 'text-white'
           }`}>
             Pharmaverse
           </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-8">
          <div className={`flex items-center gap-7 text-[13px] font-semibold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white/90'
          }`}>
            <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-teal-500 transition-colors">Dashboard</Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">About us</Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">Contact</Link>
          </div>

          <div className={`h-4 w-px mx-1 ${isScrolled ? 'bg-slate-200' : 'bg-white/10'}`} />

          <div className={`flex items-center gap-7 text-[13px] font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white'
          }`}>
            <Link href="/dashboard" className="hover:text-teal-500 transition-colors">My account</Link>
            <Link href="/dashboard" className="hover:text-teal-500 transition-colors">Login</Link>
            
            <Link href="/dashboard">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2 rounded-full font-bold text-[13px] shadow-lg shadow-orange-500/20 transition-all hover:translate-y-[-1px] active:translate-y-0 flex items-center gap-1.5">
                Register <ChevronRight size={14} strokeWidth={3} />
              </button>
            </Link>
          </div>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`xl:hidden p-2 rounded-md transition-colors ${
            isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden absolute top-full left-0 right-0"
          >
             <div className="p-6 flex flex-col gap-4 text-slate-800 font-semibold text-sm">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-teal-600">Home</Link>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-teal-600">Dashboard</Link>
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-teal-600">Contact</Link>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="pt-1">
                   <button className="w-full bg-[#f97316] hover:bg-[#ea580c] py-3 rounded-full text-white font-bold text-sm shadow-md">
                      Get Started
                   </button>
                </Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
