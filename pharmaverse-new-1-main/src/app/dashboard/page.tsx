"use client";
import React from "react";
import Icon from "@/components/PharmaIcon"; 
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* 1. THE SIGNATURE HERO BANNER */}
      <section className="bg-[#10B981] rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden flex justify-between items-center shadow-dashboard">
        <div className="max-w-2xl relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
             Active Portal Session
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-white">
            Good Evening, <br /> Pharmacist.
          </h1>
          <p className="text-emerald-50/80 text-xl font-medium leading-relaxed max-w-lg">
            Complete 6-Year Curriculum, Full Proforma, and Tool Suite at your fingertips.
          </p>
          <button className="bg-white text-[#10B981] px-10 py-4.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
             Browse Curriculum
          </button>
        </div>
        
        {/* Abstract Background Chart (from Image 3) */}
        <div className="absolute right-12 bottom-0 h-4/5 w-64 opacity-20 flex items-end gap-3 pb-8 pointer-events-none">
           <div className="w-14 bg-white rounded-t-2xl h-[30%] animate-pulse" />
           <div className="w-14 bg-white rounded-t-2xl h-[60%] animate-pulse [animation-delay:200ms]" />
           <div className="w-14 bg-white rounded-t-2xl h-[100%] shadow-2xl" />
        </div>
      </section>

      {/* 2. ACADEMIC RESOURCES (Two Long Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResourceBlock color="bg-[#FFF7ED]" icon="DocumentTextIcon" title="Pharm-D Regulations" iconColor="text-orange-500" hoverBorder="hover:border-orange-200" />
        <ResourceBlock color="bg-[#FAF5FF]" icon="BookOpenIcon" title="Pharm-D Syllabus" iconColor="text-purple-500" hoverBorder="hover:border-purple-200" />
      </div>

      {/* 3. QUICK ACCESS (The High-Fidelity 4 Grid) */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.25em]">Quick Access</h3>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ToolCard title="Proforma Builder" desc="Full clinical case generator." icon="ClipboardDocumentListIcon" active />
          <ToolCard title="Interaction Checker" desc="Verify drug safety." icon="ShieldExclamationIcon" />
          <ToolCard title="Calculators" desc="Clinical math engine." icon="CalculatorIcon" />
          <ToolCard title="Lab Reference" desc="Standard range database." icon="MagnifyingGlassIcon" />
        </div>
      </div>
    </div>
  );
}

function ResourceBlock({ color, icon, title, iconColor, hoverBorder }: any) {
  return (
    <div className={cn(
      "p-10 rounded-[2.8rem] flex items-center gap-8 cursor-pointer transition-all duration-500 group border border-transparent",
      color, hoverBorder, "hover:shadow-premium-xl hover:bg-white"
    )}>
      <div className="p-4 bg-white rounded-2xl shadow-premium-sm group-hover:scale-110 transition-transform duration-500">
        <Icon name={icon} size={28} className={iconColor} />
      </div>
      <span className="font-heading font-black text-[#1E293B] text-[15px] tracking-tight uppercase leading-none">{title}</span>
    </div>
  );
}

function ToolCard({ title, desc, icon, active = false }: any) {
  return (
    <div className={cn(
      "bg-white p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[280px] group",
      // THE PRECISE TEAL GLOW EFFECT REQUESTED
      "hover:border-[#0D9488] hover:shadow-teal-glow hover:-translate-y-2",
      active ? "border-[#0D9488] shadow-teal-glow" : ""
    )}>
       <div className="w-14 h-14 bg-slate-50 group-hover:bg-teal-50 rounded-2xl flex items-center justify-center transition-all duration-500 border border-slate-100 group-hover:border-teal-100">
          <Icon name={icon} className="text-slate-400 group-hover:text-[#0D9488]" size={28} />
       </div>
       <div>
         <h4 className="font-heading font-black text-slate-800 text-[18px] tracking-tighter mb-2 leading-none">{title}</h4>
         <p className="text-slate-400 text-[12px] font-bold leading-relaxed uppercase tracking-wide opacity-80">{desc}</p>
       </div>
    </div>
  );
}