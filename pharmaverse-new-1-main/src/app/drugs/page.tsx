"use client";

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { 
  Search, 
  Pill, 
  AlertTriangle, 
  Info, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { drugDatabase } from '../../lib/mockData';
import DashboardLayout from '../../components/DashboardLayout';

export default function DrugsPage() {
  // We use 'as any' to bypass strict TypeScript checks on the mock user object
  const { user } = useAuth() as any;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDrug, setExpandedDrug] = useState<string | null>(null);

  const filteredDrugs = drugDatabase.filter(drug =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    drug.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    drug.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
    drug.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Drug Database</h1>
          <p className="text-muted-foreground">
            Comprehensive drug information including indications, dosages, and interactions
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by drug name, class, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-teal-100 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Drugs', value: '2,500+', color: 'text-teal-600', bgColor: 'bg-teal-50' },
            { label: 'Drug Classes', value: '85', color: 'text-orange-600', bgColor: 'bg-orange-50' },
            { label: 'Interactions', value: '50K+', color: 'text-blue-600', bgColor: 'bg-blue-50' },
            { label: 'Updated Today', value: '12', color: 'text-purple-600', bgColor: 'bg-purple-50' }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl border shadow-sm ${stat.bgColor}`}>
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Drug Result List */}
        <div className="space-y-4">
          {filteredDrugs.map((drug, index) => {
            const isExpanded = expandedDrug === drug.id;

            return (
              <div
                key={drug.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-teal-200 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Drug Header Button */}
                <button
                  onClick={() => setExpandedDrug(isExpanded ? null : drug.id)}
                  className="w-full flex items-start justify-between text-left p-6"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-100">
                      <Pill className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{drug.name}</h3>
                        <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider">
                          {drug.class}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {drug.genericName} • {drug.brand || 'Generic'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-md text-xs font-bold border border-orange-100">
                          {drug.category}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          {drug.route}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-teal-600 bg-teal-50 rounded-full p-1" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 bg-gray-50 rounded-full p-1" />
                    )}
                  </div>
                </button>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="p-6 border-t border-gray-50 bg-gray-50/30 space-y-6 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <Info className="w-4 h-4 text-teal-600" />
                          </div>
                          <h4 className="font-bold text-gray-900">Indication</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{drug.indication}</p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <Pill className="w-4 h-4 text-orange-600" />
                          </div>
                          <h4 className="font-bold text-gray-900">Dosage</h4>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">{drug.dosage}</p>
                        <p className="text-xs text-gray-400 mt-2 italic">Standard adult administration route: {drug.route}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2 px-1">
                            <AlertTriangle className="w-4 h-4 text-orange-500" /> Clinical Considerations
                        </h4>
                        
                        <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter w-full">Side Effects</span>
                                {drug.sideEffects.map((effect, i) => (
                                    <span key={i} className="px-3 py-1 bg-white text-orange-700 border border-orange-100 rounded-lg text-sm shadow-sm">
                                        {effect}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter w-full">Contraindications</span>
                                {drug.contraindications.map((contra, i) => (
                                    <span key={i} className="px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-lg text-sm shadow-sm">
                                        {contra}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredDrugs.length === 0 && (
          <div className="bg-white text-center py-20 rounded-3xl border shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gray-50 mx-auto mb-4 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-xs mx-auto">
              We couldn't find any drugs matching "{searchQuery}". Try using the generic name instead.
            </p>
          </div>
        )}

        {/* Interaction Checker Call-to-Action */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-teal-100 text-xs font-bold mb-4 uppercase tracking-widest border border-white/20">
                <Sparkles className="w-3 h-3" /> New Feature
              </div>
              <h3 className="text-3xl font-bold mb-3">AI Interaction Checker</h3>
              <p className="text-teal-50/80 mb-6 text-lg max-w-xl">
                Safety first. Scan multiple medications simultaneously to check for potential chemical interactions and adverse risks using our real-time database.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none py-6 px-10 text-lg font-bold rounded-2xl transition-transform active:scale-95 shadow-lg shadow-orange-900/40">
                Launch Interaction Pro
              </Button>
            </div>
            <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-3xl border border-white/10">
              <AlertTriangle className="w-24 h-24 text-orange-400 drop-shadow-xl" />
            </div>
          </div>
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full -ml-48 -mb-48" />
        </div>
      </div>
    </DashboardLayout>
  );
}