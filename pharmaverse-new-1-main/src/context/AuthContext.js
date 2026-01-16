"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Standardized logic so we don't need external mock files
    if (email === 'student@pharmaverse.in' && password === 'demo123') {
      const demoUser = { name: 'Priya Sharma', email: email, isPremium: true };
      setUser(demoUser);
      localStorage.setItem('pharmaverse_user', JSON.stringify(demoUser));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pharmaverse_user');
  };

  useEffect(() => {
    const stored = localStorage.getItem('pharmaverse_user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isPremium: user?.isPremium || false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);