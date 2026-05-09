"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Grid/Matrix effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#ffb4a3_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Pulsing Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-24 h-24 bg-primary/10 border-2 border-primary/30 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,180,163,0.2)]"
        >
          <span className="font-display font-black text-primary text-4xl">TJ</span>
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-3">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-h3 text-on-surface uppercase tracking-[0.3em]"
          >
            Initializing_System
          </motion.h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-surface-container rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
            ></motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-mono text-[10px] text-primary/60 uppercase tracking-widest"
          >
            Allocating_Resources...
          </motion.p>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-primary/20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-primary/20"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20"></div>
    </main>
  );
}
