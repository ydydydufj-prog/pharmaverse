"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./PharmaIcon"; 
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#FDFDFD] font-sans selection:bg-teal-100 selection:text-teal-900 overflow-hidden">
      {/* SIDEBAR - PURE CLEAN DESIGN */}
      <aside className={cn(
        "bg-white border-r border-slate-100 flex flex-col transition-all duration-500 ease-premium z-50",
        isCollapsed ? "w-0 -translate-x-full" : "w-[280px]"
      )}>
        <div className="p-8 mb-6">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0f766e] rounded-xl flex items-center justify-center text-white font-black shadow-cta">PV</div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-heading font-bold text-base text-slate-800 tracking-tight leading-none uppercase">Pharmaverse</span>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Student Portal</span>
              </div>
           </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarLink href="/dashboard" icon="Squares2X2Icon" label="Dashboard" active={pathname === '/dashboard'} />
          <SidebarLink href="/curriculum" icon="BookOpenIcon" label="Curriculum" active={pathname === '/curriculum'} />
          
          <div className="pt-8 pb-3 px-5 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Clinical</div>
          <SidebarLink href="#" icon="ClipboardDocumentListIcon" label="Proforma" />
          <SidebarLink href="#" icon="WrenchScrewdriverIcon" label="Tools" />
        </nav>

        <div className="p-8 border-t border-slate-50">
          <Link href="/" className="flex items-center gap-3 text-rose-500 text-[11px] font-black uppercase tracking-widest hover:text-rose-600 transition-colors">
            <Icon name="ArrowLeftOnRectangleIcon" size={16} /> Exit Website
          </Link>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-slate-50/20">
        <header className="h-20 flex items-center px-10 gap-8 bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-40">
           <div className="flex items-center gap-4 shrink-0">
             <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2.5 text-slate-400 hover:text-teal-600 transition-all rounded-xl hover:bg-teal-50/50">
               <Icon name="Bars3BottomLeftIcon" size={20} />
             </button>
             <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.25em]">
                <Link href="/dashboard" className="hover:text-teal-600 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-900 tracking-tighter">{pathname?.split('/').pop()?.toUpperCase()}</span>
             </div>
           </div>

           {/* CENTER SEARCH BAR - AS IN VIDEO */}
           <div className="flex-1 flex justify-center">
             <div className="relative w-full max-w-xl group">
               <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0f766e] transition-colors" />
               <input 
                 placeholder="Search curriculum, drugs, labs..." 
                 className="w-full bg-[#F3F4F6]/50 border-none rounded-full py-3 pl-14 pr-6 text-sm font-medium focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all outline-none text-slate-600 shadow-inner"
               />
             </div>
           </div>

           <div className="w-10 h-10 bg-[#065F46] text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white shrink-0 cursor-pointer">P</div>
        </header>

        <div className="flex-1 overflow-y-auto px-10 py-10">
           <div className="max-w-7xl mx-auto pb-40">
             {children}
           </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ href, icon, label, active }: any) {
  return (
    <Link href={href || "#"} className={cn(
      "flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[14px] font-bold tracking-tight transition-all duration-300",
      active ? "bg-[#F0FDFA] text-[#0f766e] shadow-sm" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
    )}>
      <Icon name={icon} size={20} variant={active ? 'solid' : 'outline'} className={active ? 'text-[#0f766e]' : ''} />
      {label}
    </Link>
  );
}