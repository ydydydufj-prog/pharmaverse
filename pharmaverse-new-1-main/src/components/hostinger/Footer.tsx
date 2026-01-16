"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (link: string) => {
    toast({
      title: "📡 Clinical Link Initialized",
      description: `Establishing secure connection to ${link}...`,
    });
  };

  const footerSections = [
    {
      title: 'Academic Portal',
      links: ['Pharmacology I-II', 'Pharmaceutics', 'Pharmacognosy', 'Clinical Pharmacy', 'Hospital Pharmacy']
    },
    {
      title: 'Intelligence Suite',
      links: ['Interaction Checker', 'Proforma Builder', 'Clinical Calculators', 'Dose Optimization', 'Drug Info']
    },
    {
      title: 'Digital Archive',
      links: ['Handwritten Notes', 'PharmD Archive', 'NAPLEX Prep', 'Ward Round Logs', 'Flowcharts']
    },
    {
      title: 'Operations',
      links: ['Our Story', 'Support Center', 'Standard Ops', 'Privacy Protocol', 'Contact Hub']
    }
  ];

  return (
    <footer className="relative bg-[#f8fbfb] border-t border-slate-200 text-slate-600 font-mona overflow-hidden pt-32 pb-16">
      
      {/* 1. PREMIUM AMBIENT LIGHTING */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* 2. TECH DOT GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#0d4444_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* TOP IDENTITY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <img src="/logo.png" alt="Pharmaverse" className="h-12 w-auto contrast-125" />
              <span className="text-3xl font-black text-[#0d4444] tracking-tighter uppercase leading-none">
                Pharmaverse<span className="text-orange-500 italic">.in</span>
              </span>
            </motion.div>
            
            <p className="text-[#64748b] text-lg font-medium leading-relaxed max-w-md tracking-tight">
              The leading digital operating system for pharmacy practitioners. Engineered for high-precision clinical excellence and academic authority across India.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <button 
                  key={i} 
                  onClick={() => handleLinkClick("Social")}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-[#0d4444] hover:border-teal-50 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
                >
                  <Icon className="w-5 h-5 stroke-[1.5px]" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE DIRECTORY */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-8">
                <h4 className="font-bold text-[#0d4444] text-[10px] uppercase tracking-[0.3em] opacity-60">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="group flex items-center text-slate-400 transition-all duration-300"
                      >
                        <span 
                          className="text-[14px] font-bold text-slate-500 transition-all duration-300 group-hover:text-teal-600"
                          style={{ fontVariationSettings: "'wght' 500, 'wdth' 100" }}
                          onMouseEnter={(e) => (e.currentTarget.style.fontVariationSettings = "'wght' 800, 'wdth' 115")}
                          onMouseLeave={(e) => (e.currentTarget.style.fontVariationSettings = "'wght' 500, 'wdth' 100")}
                        >
                          {link}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* UTILITY BAR */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4 text-[13px] font-bold text-slate-400 tracking-tight">
            <p className="text-slate-900/40 tracking-widest uppercase text-[11px]">© 2026</p>
            
            <button className="flex items-center gap-2 group hover:text-[#0d4444] transition-colors">
              <MapPin className="w-4 h-4 text-orange-500 group-hover:animate-bounce" />
              <span>India Hub</span>
            </button>

            <button onClick={() => handleLinkClick("Privacy")} className="hover:text-slate-900 transition-colors uppercase tracking-wider text-[11px]">Legal Protocol</button>
            <button onClick={() => handleLinkClick("Terms")} className="hover:text-slate-900 transition-colors uppercase tracking-wider text-[11px]">Service Standards</button>
          </div>

          {/* CLEANED SUPPORT CTA */}
          <motion.button 
            onClick={() => handleLinkClick("Support")}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 py-4 px-8 bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 group"
          >
            <div className="w-9 h-9 bg-[#0d4444] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
               <Mail className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-black text-[#0d4444] tracking-tight">support@pharmaverse.in</p>
            <ArrowUpRight className="w-4 h-4 text-slate-300 ml-2 group-hover:text-orange-500 transition-colors" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
