"use client";
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { 
  Stethoscope, Pill, Activity, FlaskConical, 
  Sparkles, Calculator, HeartPulse, Microscope, 
  GraduationCap, Search 
} from 'lucide-react';
import { curriculumData } from '@/lib/mockData';
import { cn } from '@/lib/utils';

// Icon Registry to match your data icons to components
const iconRegistry: any = {
  Stethoscope,
  Pill,
  Activity,
  FlaskConical,
  Sparkles,
  Calculator,
  HeartPulse,
  Microscope,
  GraduationCap
};

export default function CurriculumPage() {
  const [selectedYear, setSelectedYear] = useState('Year 1');
  
  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
  const data = curriculumData[selectedYear] || curriculumData['Year 1'];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-500 max-w-[1200px] mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Curriculum</h1>

        {/* Year Selector Pills (Exact Match to 2nd Image) */}
        <div className="flex flex-wrap gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-semibold transition-all border",
                selectedYear === year 
                  ? "bg-[#0d9488] text-white border-transparent shadow-sm" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-teal-400 hover:text-teal-600"
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Subjects Grid (Clean 3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {data.subjects && data.subjects.length > 0 ? (
            data.subjects.map((subject: any) => {
              const IconComp = iconRegistry[subject.icon] || Activity;
              
              return (
                <div 
                  key={subject.id} 
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer ring-1 ring-slate-100"
                >
                  {/* Icon Box */}
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105",
                    subject.color || "bg-teal-50 text-teal-600"
                  )}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  {/* Subject Info */}
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {subject.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">
                    {subject.topics && Array.isArray(subject.topics) 
                      ? subject.topics[0] 
                      : (subject.topics || "General Module")}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
               <p className="text-slate-400 font-medium italic">Curriculum details for {selectedYear} coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}