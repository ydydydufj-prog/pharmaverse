"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { 
  Crown, Check, Zap, Star, Award, Shield, Headphones, Sparkles 
} from 'lucide-react';
import { toast } from 'sonner';
import DashboardLayout from '../../components/DashboardLayout';

export default function UpgradePage() {
  const router = useRouter();
  const { user, upgradeToPremium } = useAuth() as any;

  const handleUpgrade = () => {
    if (upgradeToPremium) {
      upgradeToPremium();
      toast.success('Congratulations! You are now a Premium member! 🥳');
      setTimeout(() => router.push('/dashboard'), 1500);
    }
  };

  const features = {
    free: [
      'Year 1-2 Curriculum',
      'Basic Study Materials',
      'Drug Database (Limited)',
      'Progress Tracking',
      'Community Access',
    ],
    premium: [
      'Complete 6-Year Curriculum',
      'All Premium Study Materials',
      'Full Drug Database & Interaction Checker',
      'Advanced Analytics & Reports',
      'Clinical Case Studies Library',
      'Video Lectures & Masterclasses',
      'Priority Support 24/7',
      'Certificate of Completion',
    ],
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Complete Access',
      description: 'Unlock all 6 years of comprehensive Pharm.D curriculum',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: Star,
      title: 'Premium Content',
      description: 'Exclusive study materials, videos, and clinical cases',
      color: 'from-accent to-warning'
    },
    {
      icon: Award,
      title: 'Advanced Tools',
      description: 'Full drug interaction checker and clinical calculators',
      color: 'from-secondary to-primary'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: '24/7 dedicated support to help you succeed',
      color: 'from-warning to-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary-light/10 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Special Offer - Limited Time
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Upgrade to{' '}
            <span className="text-gradient-premium">Premium</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get unlimited access to all premium features and accelerate your journey to becoming an exceptional pharmacist
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="card-premium bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                <p className="text-muted-foreground">Basic access for beginners</p>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">₹0</span>
              <span className="text-muted-foreground">/month</span>
            </div>

            <div className="space-y-3 mb-8">
              {features.free.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full h-12 font-semibold"
              disabled
            >
              Current Plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="relative card-premium bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 shadow-premium">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-accent to-warning text-white rounded-full text-sm font-bold shadow-lg">
              <span className="flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Most Popular
              </span>
            </div>

            <div className="flex items-center justify-between mb-6 mt-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-muted-foreground">Complete access & features</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gradient-premium">₹499</span>
                <span className="text-muted-foreground line-through">₹999</span>
              </div>
              <span className="text-muted-foreground">/month • Save 50%</span>
            </div>

            <div className="space-y-3 mb-8">
              {features.premium.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handleUpgrade}
              className="w-full h-14 bg-gradient-to-r from-primary via-accent to-warning text-white font-bold text-lg shadow-premium hover:shadow-premium hover:scale-105 transition-all"
            >
              <Crown className="w-5 h-5 mr-2" />
              Upgrade to Premium
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Cancel anytime • Money-back guarantee
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="card-premium bg-gradient-to-br from-secondary/5 to-primary/5">
          <h2 className="text-3xl font-bold text-center mb-8">What Premium Members Say</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma',
                role: 'Pharm.D 4th Year',
                avatar: 'PS',
                quote: 'Premium membership transformed my learning. The clinical cases and video lectures are invaluable!',
                rating: 5
              },
              {
                name: 'Rahul Verma',
                role: 'Pharm.D 5th Year',
                avatar: 'RV',
                quote: 'Best investment for pharmacy students. The drug interaction checker alone is worth it.',
                rating: 5
              },
              {
                name: 'Ananya Patel',
                role: 'Pharm.D 3rd Year',
                avatar: 'AP',
                quote: 'Advanced analytics helped me identify my weak areas and improve significantly.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="card-premium max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can cancel your subscription at any time. Your premium access will continue until the end of your billing period.'
              },
              {
                q: 'Is there a money-back guarantee?',
                a: 'Absolutely! We offer a 14-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment, no questions asked.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit/debit cards, UPI, net banking, and popular digital wallets.'
              },
              {
                q: 'Can I switch from monthly to annual later?',
                a: 'Yes! You can upgrade to an annual plan at any time and we\'ll prorate the remaining balance from your current subscription.'
              }
            ].map((faq, index) => (
              <div key={index} className="pb-6 border-b border-border last:border-0">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleUpgrade}
            className="h-16 px-12 bg-gradient-to-r from-primary via-accent to-warning text-white font-bold text-xl shadow-premium hover:shadow-premium hover:scale-105 transition-all"
          >
            <Crown className="w-6 h-6 mr-3" />
            Start Premium Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ premium members already excelling in their Pharm.D journey
          </p>
        </div>
      </div>
    </div>
  );
};
