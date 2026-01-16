"use client";

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { 
  Lock, Crown, Download, Eye, Star, Search, Filter, 
  FileText, Video, BookMarked, ScrollText 
} from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

export default function MaterialsPage() {
  const { isPremium } = useAuth() as any;
  const [searchQuery, setSearchQuery] = useState('');

  // HARDCODED DATA - This stops the "Module not found" error
  const studyMaterials = [
    { id: 1, title: 'Pharmacology Notes', subject: 'Pharmacy', rating: 4.8, type: 'notes' },
    { id: 2, title: 'Dosage Calculation Video', subject: 'Analysis', rating: 4.9, type: 'video' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Study Materials</h1>
        <p className="text-gray-500">Access your premium library of pharmaceutical notes.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {studyMaterials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><FileText /></div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{item.subject}</p>
              <Button variant="outline" className="w-full">View Material</Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}