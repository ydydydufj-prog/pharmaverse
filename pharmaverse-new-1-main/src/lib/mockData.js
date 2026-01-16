/**
 * PHARMAVERSE CLEAN MOCK DATA
 * Simplified for the Minimalist Dashboard & Curriculum
 */

// 1. User Profile
export const mockUsers = [
  {
    id: '1',
    name: 'Priya Sharma',
    year: 'Year 3',
    isPremium: true,
    planType: 'Pro Clinical',
    avatar: 'PS',
    progress: {
      overallCompletion: 62,
      currentStreak: 12,
      totalStudyHours: 340,
    }
  }
];

// 2. Curriculum Data (All 6 Years Populated)
export const curriculumData = {
  'Year 1': {
    semester: 'FOUNDATION',
    subjects: [
      { id: 'y1-1', name: 'Human Anatomy', topics: 'Organ systems', icon: 'Stethoscope', color: 'bg-teal-50 text-teal-600' },
      { id: 'y1-2', name: 'Pharmaceutics', topics: 'Dosage forms', icon: 'Pill', color: 'bg-blue-50 text-blue-600' },
      { id: 'y1-3', name: 'Medicinal Biochemistry', topics: 'Metabolism', icon: 'Activity', color: 'bg-purple-50 text-purple-600' },
      { id: 'y1-4', name: 'Pharm. Organic Chem', topics: 'Reactions', icon: 'FlaskConical', color: 'bg-orange-50 text-orange-600' },
      { id: 'y1-5', name: 'Pharm. Inorganic Chem', topics: 'Impurities', icon: 'Sparkles', color: 'bg-slate-50 text-slate-600' },
      { id: 'y1-6', name: 'Remedial Math/Bio', topics: 'Foundation', icon: 'Calculator', color: 'bg-emerald-50 text-emerald-600' }
    ]
  },
  'Year 2': {
    semester: 'CORE SCIENCES',
    subjects: [
      { id: 'y2-1', name: 'Pathophysiology', topics: 'Disease Etiology', icon: 'HeartPulse', color: 'bg-orange-50 text-orange-600' },
      { id: 'y2-2', name: 'Pharm. Microbiology', topics: 'Immunity', icon: 'Microscope', color: 'bg-teal-50 text-teal-600' },
      { id: 'y2-3', name: 'Pharmacognosy', topics: 'Plant Drugs', icon: 'Sparkles', color: 'bg-emerald-50 text-emerald-600' },
      { id: 'y2-4', name: 'Pharmacology-I', topics: 'General & ANS', icon: 'Pill', color: 'bg-blue-50 text-blue-600' },
      { id: 'y2-5', name: 'Community Pharmacy', topics: 'Counseling', icon: 'GraduationCap', color: 'bg-purple-50 text-purple-600' },
      { id: 'y2-6', name: 'Pharmacotherapeutics-I', topics: 'CVS, Resp', icon: 'Activity', color: 'bg-rose-50 text-rose-600' }
    ]
  },
  'Year 3': {
    semester: 'ADVANCED PHARMACOLOGY',
    subjects: [
      { id: 'y3-1', name: 'Pharmacology-II', topics: 'CNS, Autocoids', icon: 'Pill', color: 'bg-purple-50 text-purple-600' },
      { id: 'y3-2', name: 'Pharm. Analysis', topics: 'Spectroscopy', icon: 'Activity', color: 'bg-blue-50 text-blue-600' },
      { id: 'y3-3', name: 'Pharmacotherapeutics-II', topics: 'Infectious Diseases', icon: 'HeartPulse', color: 'bg-teal-50 text-teal-600' },
      { id: 'y3-4', name: 'Pharm. Jurisprudence', topics: 'Forensic Pharmacy', icon: 'Stethoscope', color: 'bg-slate-50 text-slate-600' },
      { id: 'y3-5', name: 'Medicinal Chemistry', topics: 'SAR & Synthesis', icon: 'FlaskConical', color: 'bg-orange-50 text-orange-600' },
      { id: 'y3-6', name: 'Pharm. Formulations', topics: 'Solid Dosage', icon: 'Calculator', color: 'bg-blue-50 text-blue-600' }
    ]
  },
  'Year 4': {
    semester: 'CLINICAL PHARMACY',
    subjects: [
      { id: 'y4-1', name: 'Pharmacotherapeutics-III', topics: 'GI, Renal, Endo', icon: 'Activity', color: 'bg-orange-50 text-orange-600' },
      { id: 'y4-2', name: 'Hospital Pharmacy', topics: 'Management', icon: 'Stethoscope', color: 'bg-blue-50 text-blue-600' },
      { id: 'y4-3', name: 'Clinical Pharmacy', topics: 'Ward Rounds', icon: 'Pill', color: 'bg-teal-50 text-teal-600' },
      { id: 'y4-4', name: 'Biostatistics', topics: 'Research Method', icon: 'Activity', color: 'bg-purple-50 text-purple-600' },
      { id: 'y4-5', name: 'Biopharmaceutics', topics: 'ADME', icon: 'FlaskConical', color: 'bg-orange-50 text-orange-600' },
      { id: 'y4-6', name: 'Toxicology', topics: 'Poison Info', icon: 'HeartPulse', color: 'bg-slate-50 text-slate-600' }
    ]
  },
  'Year 5': {
    semester: 'RESEARCH & EPIDEMIOLOGY',
    subjects: [
      { id: 'y5-1', name: 'Clinical Research', topics: 'Trials & Ethics', icon: 'Microscope', color: 'bg-blue-50 text-blue-600' },
      { id: 'y5-2', name: 'Pharmacoepidemiology', topics: 'Population Study', icon: 'Activity', color: 'bg-teal-50 text-teal-600' },
      { id: 'y5-3', name: 'Pharmacoeconomics', topics: 'Cost-Benefit', icon: 'Calculator', color: 'bg-orange-50 text-orange-600' },
      { id: 'y5-4', name: 'Clerkship', topics: 'Clinical Case Study', icon: 'Pill', color: 'bg-purple-50 text-purple-600' },
      { id: 'y5-5', name: 'Project Work', topics: 'Thesis Preparation', icon: 'GraduationCap', color: 'bg-blue-50 text-blue-600' }
    ]
  },
  'Year 6': {
    semester: 'INTERNSHIP',
    subjects: [
      { id: 'y6-1', name: 'Internship (General)', topics: '6 Months Rotation', icon: 'HeartPulse', color: 'bg-orange-50 text-orange-600' },
      { id: 'y6-2', name: 'Internship (Specialty)', topics: '3 Units Rotation', icon: 'HeartPulse', color: 'bg-teal-50 text-teal-600' },
      { id: 'y6-3', name: 'Grand Rounds', topics: 'Case Presentations', icon: 'GraduationCap', color: 'bg-blue-50 text-blue-600' }
    ]
  }
};

// 3. Analytics Data
export const analyticsData = {
  weeklyStudyTime: [
    { day: 'Mon', hours: 4.5, clinical: 1.0 },
    { day: 'Tue', hours: 3.2, clinical: 0.5 },
    { day: 'Wed', hours: 5.1, clinical: 2.5 },
    { day: 'Thu', hours: 8.0, clinical: 4.0 },
    { day: 'Fri', hours: 3.5, clinical: 1.5 },
    { day: 'Sat', hours: 6.2, clinical: 3.0 },
    { day: 'Sun', hours: 5.5, clinical: 2.0 }
  ],
  subjectProgress: [
    { subject: 'Pharmacology', completed: 85, total: 100, color: '#10B981' },
    { subject: 'Therapeutics', completed: 62, total: 100, color: '#3B82F6' },
    { subject: 'Biochemistry', completed: 78, total: 100, color: '#8B5CF6' },
    { subject: 'Anatomy', completed: 92, total: 100, color: '#F59E0B' },
  ],
};

// 4. Drug Database
export const drugDatabase = [
  { id: 'd1', name: 'Metformin', brand: 'Glucophage', category: 'Antidiabetic' },
  { id: 'd2', name: 'Amoxicillin', brand: 'Amoxil', category: 'Antibiotic' }
];

// 5. Notifications
export const notifications = [
  { id: 1, title: 'Case Study Approved', time: '5m ago' },
  { id: 2, title: 'New Resources Added', time: '1h ago' }
];