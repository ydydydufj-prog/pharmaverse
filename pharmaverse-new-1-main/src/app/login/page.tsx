"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth() as any;

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, you'd call login(formData.email, formData.password)
      toast.success('Welcome back to PharmaVerse!');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img src="/logo.png" alt="PharmaVerse" className="h-16 w-auto" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">
              Welcome <span className="text-gradient-primary">Back</span>
            </h1>
            <p className="text-muted-foreground">
              Continue your journey to pharmaceutical excellence
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-primary-light/20 border border-primary/20 rounded-xl">
            <p className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Demo Credentials
            </p>
            <p className="text-xs text-muted-foreground">
              Email: <span className="font-mono font-semibold text-foreground">student@pharmaverse.in</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Password: <span className="font-mono font-semibold text-foreground">demo123</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                className="h-12 bg-background"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold">
                  Password
                </Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-primary hover:text-primary-glow transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-12 bg-background pr-12"
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

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-primary to-primary-glow text-white font-semibold rounded-xl shadow-lg hover:shadow-premium transition-all duration-300"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground font-medium">
                New to PharmaVerse?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="w-full h-12 border-2 border-primary/20 hover:border-primary hover:bg-primary-light/10 font-semibold rounded-xl transition-all"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-secondary to-accent p-12 items-center justify-center relative overflow-hidden">
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
            <p className="text-sm font-semibold">Trusted by 10,000+ Students</p>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Master your Pharm.D from Day 1 to Dr.
          </h2>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            The complete digital platform designed to help pharmacy students excel through their entire 6-year journey with cutting-edge tools and premium resources.
          </p>

          <div className="space-y-4">
            {[
              'Complete 6-year curriculum coverage',
              'AI-powered drug interaction checker',
              'Real-time clinical case studies',
              'Progress tracking & analytics'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/95 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};
