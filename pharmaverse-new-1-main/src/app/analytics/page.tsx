"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext'; 
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { TrendingUp, Clock, Target, Award, Calendar, BookOpen } from 'lucide-react';
import { analyticsData } from '@/lib/mockData'; 
import DashboardLayout from '@/components/DashboardLayout'; 

const COLORS = ['#0d9488', '#f97316', '#0f766e', '#fb923c', '#2dd4bf'];

export default function AnalyticsPage() {
  const { user } = useAuth() as any;

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Progress Analytics</h1>
          <p className="text-muted-foreground">
            Track your learning journey with detailed insights and statistics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Study Time', value: `${user?.progress?.totalStudyHours || 340}h`, icon: Clock, color: 'teal' },
            { label: 'Courses Completed', value: user?.progress?.coursesCompleted || 18, icon: Award, color: 'orange' },
            { label: 'Current Streak', value: `${user?.progress?.currentStreak || 12} days`, icon: Target, color: 'teal' },
            { label: 'Avg. Daily Time', value: '4.8h', icon: Calendar, color: 'orange' }
          ].map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border shadow-sm group hover:border-teal-500 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.color === 'teal' ? 'bg-teal-50 text-teal-600' : 'bg-orange-50 text-orange-600'}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weekly Study Time */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6">Weekly Study Time</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData.weeklyStudyTime}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#0d9488" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Performance */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6">Monthly Performance Trend</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData.monthlyPerformance}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={3} dot={{ fill: '#f97316', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subject Progress */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6">Subject-wise Progress</h3>
            <div className="space-y-4">
              {analyticsData.subjectProgress.map((subject, index) => {
                const percentage = (subject.completed / subject.total) * 100;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{subject.subject}</span>
                      <span className="text-sm font-bold text-teal-600">{Math.round(percentage)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-600 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Study Distribution */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6">Study Time Distribution</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analyticsData.subjectProgress}
                    dataKey="completed"
                    nameKey="subject"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {analyticsData.subjectProgress.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-bold mb-6">Personalized Recommendations</h3>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, title: 'Focus on Therapeutics', description: 'Your progress is slightly behind schedule.', color: 'text-orange-600' },
              { icon: Target, title: 'Maintain Your Streak', description: 'You\'re on a 12-day streak! Keep it up.', color: 'text-teal-600' },
              { icon: BookOpen, title: 'Try New Materials', description: 'Explore video lectures for Pharmacology.', color: 'text-blue-600' }
            ].map((rec, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                <rec.icon className={`w-6 h-6 ${rec.color}`} />
                <div>
                  <h4 className="font-bold mb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-500">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}