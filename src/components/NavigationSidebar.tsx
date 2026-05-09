"use client";

import { motion } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';

const NavigationSidebar = () => {
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
    <motion.aside 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-8 z-50 hidden md:flex border-r border-white/5 bg-background/50 backdrop-blur-xl"
    >
      {/* Top Logo */}
      <div className="mb-12">
        <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
          <span className="font-display font-black text-primary text-xl">T</span>
        </div>
      </div>

      {/* Nav Icons */}
      <nav className="flex flex-col w-full">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`group relative w-full h-16 flex items-center justify-center transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-r-4 border-primary text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                }`}
              title={item.name}
            >
              <span className={`material-symbols-outlined transition-colors duration-300 text-[24px]
                ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`}
              >
                {item.icon}
              </span>
            </a>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default NavigationSidebar;
