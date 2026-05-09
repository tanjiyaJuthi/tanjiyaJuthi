"use client";

import React from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

const BottomNav = () => {
  const navItems = [
    { name: 'Home', href: '#home', icon: 'home', id: 'home' },
    { name: 'About', href: '#about', icon: 'person', id: 'about' },
    { name: 'Skills', href: '#skills', icon: 'code', id: 'skills' },
    { name: 'Background', href: '#background', icon: 'image', id: 'background' },
    { name: 'Portfolio', href: '#portfolio', icon: 'terminal', id: 'portfolio' },
    { name: 'Contact', href: '#contact', icon: 'mail', id: 'contact' },
  ];

  const activeSection = useActiveSection(navItems.map(item => item.id));

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90vw] max-w-[400px]">
      <div className="flex items-center justify-around px-2 py-3 glass-card rounded-2xl bg-surface-container/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 active:scale-90
                ${isActive 
                  ? 'bg-primary-container/20 text-primary scale-110' 
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
              title={item.name}
            >
              <span className={`material-symbols-outlined transition-colors duration-300 text-[24px]
                ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
              >
                {item.icon}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
