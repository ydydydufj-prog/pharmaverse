"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../../components/ui/select';
import { Eye, EyeOff, UserPlus, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth() as any;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    year: '',
    university: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const result = await signup(formData);
      if (result.success) {
        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        toast.error(result.error || 'Signup failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-accent via-warning to-primary p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <p className="text-sm font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Start Your Journey Today
            </p>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Join India's Premier Pharmacy Student Community
          </h2>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Get instant access to Year 1-2 curriculum, study materials, and essential clinical tools. Upgrade anytime for complete 6-year coverage.
          </p>

          <div className="space-y-4">
            {[
              { title: 'Free Access', desc: 'Complete Year 1-2 curriculum' },
              { title: 'Smart Tools', desc: 'Drug checker & calculators' },
              { title: 'Study Resources', desc: 'Notes, videos & flashcards' },
              { title: 'Progress Tracking', desc: 'Monitor your growth' }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">{feature.title}</p>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-md animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt="PharmaVerse" className="h-14 w-auto" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">
              Create Your <span className="text-gradient-accent">Account</span>
            </h1>
            <p className="text-muted-foreground">
              Start learning with Year 1-2 free access
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11 bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11 bg-background"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year" className="text-sm font-semibold">
                  Current Year
                </Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Year 1</SelectItem>
                    <SelectItem value="2">Year 2</SelectItem>
                    <SelectItem value="3">Year 3</SelectItem>
                    <SelectItem value="4">Year 4</SelectItem>
                    <SelectItem value="5">Year 5</SelectItem>
                    <SelectItem value="6">Year 6</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university" className="text-sm font-semibold">
                  University
                </Label>
                <Input
                  id="university"
                  type="text"
                  placeholder="AIIMS, NIPER..."
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  required
                  className="h-11 bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-11 bg-background pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-semibold">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="h-11 bg-background"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-accent to-warning text-white font-semibold rounded-xl shadow-lg hover:shadow-premium transition-all duration-300 mt-6"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          {/* Terms */}
          <p className="text-xs text-center text-muted-foreground mt-4">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground font-medium">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="w-full h-11 border-2 border-border hover:border-primary hover:bg-primary-light/10 font-semibold rounded-xl transition-all"
              >
                Sign In Instead
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
