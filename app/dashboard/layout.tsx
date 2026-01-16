// /app/dashboard/layout.tsx
import React from "react";
import "@/globals.css";
import Sidebar from "@/components/dub_sidebar/Sidebar";

export const metadata = {
  title: "Dashboard - Pharmaverse",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}