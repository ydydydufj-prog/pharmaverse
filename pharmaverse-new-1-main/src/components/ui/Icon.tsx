"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  variant?: 'outline' | 'solid';
  color?: string;
}

const Icon = ({ name, size = 24, className = '', color = 'currentColor' }: IconProps) => {
  const LucideIcon = (LucideIcons as any)[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <LucideIcon size={size} className={className} color={color} />;
};

export default Icon;
