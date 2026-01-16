"use client";

import Header from "@/components/hostinger/Header";
import Hero from "@/components/hostinger/Hero";
import Stats from "@/components/hostinger/Stats"; 
import StudentStruggle from "@/components/hostinger/StudentStruggle";
import VelocityText from "@/components/hostinger/VelocityText"; 
import UnifiedSystem from "@/components/hostinger/UnifiedSystem";
import Testimonials from "@/components/hostinger/Testimonials";
import MedicalScroll from "@/components/hostinger/MedicalScroll";
import NeoTicker from "@/components/hostinger/NeoTicker";
import Footer from "@/components/hostinger/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-[#09090b] relative">
        
        {/* LAYER 1: Hero (Bottom) */}
        <div className="sticky top-0 z-0">
          <Hero />
          <div className="relative z-10 -mt-[1px]">
            <Stats />
          </div>
        </div>

        {/* LAYER 2: The White Sheet (Square Corners) */}
        {/* Using a more natural shadow: 0px offset Y, spread across 50px blur */}
        <div className="relative z-10 bg-white text-slate-900 
                        shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.2)]">
            <StudentStruggle />
            <VelocityText /> 
            <UnifiedSystem />
            
            {/* LAYER 3: Testimonials (Pinned for next overlap) */}
            <div className="relative h-[120vh]">
               <div className="sticky top-0 h-screen overflow-hidden">
                  <Testimonials />
               </div>
            </div>
        </div>

        {/* LAYER 4: The Final Dark Sheet (Original Medical Scroller + Footer) */}
        {/* 
           -mt-[20vh] creates a smoother overlap. 
           Shadow intensity increased slightly compared to white, 
           as dark backgrounds absorb shadow color. 
        */}
        <div className="relative z-30 bg-[#09090b] -mt-[20vh]
                        shadow-[0_-40px_100px_rgba(0,0,0,0.7)] 
                        border-t border-white/5">
            <MedicalScroll />
            <NeoTicker />
            <Footer />
        </div>

      </main>
      
      <Toaster />
    </>
  );
}
