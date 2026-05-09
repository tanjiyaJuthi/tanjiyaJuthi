"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 overflow-hidden relative">
      {/* Glitchy Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <h1 className="text-[30rem] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          404
        </h1>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-8 md:p-16 rounded-[3rem] border-2 border-error/20 bg-error/5 backdrop-blur-xl relative z-10 max-w-2xl w-full text-center shadow-[0_0_100px_rgba(255,107,107,0.1)]"
      >
        <div className="mb-8">
          <motion.div 
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
              x: [0, -2, 2, -2, 0]
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            <span className="material-symbols-outlined text-error text-8xl md:text-9xl mb-4">
              warning
            </span>
          </motion.div>
          <h2 className="font-display text-display text-on-surface uppercase tracking-tighter leading-none mb-4">
            System_<span className="text-error">Error</span>
          </h2>
          <div className="h-1 w-20 bg-error mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 mb-12">
          <p className="font-display text-h3 text-on-surface-variant uppercase tracking-widest">
            Entry_Not_Found
          </p>
          <p className="font-body-lg text-on-surface-variant max-w-md mx-auto">
            The requested resource path does not exist in the current directory. 
            The connection has been terminated or the address is invalid.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-error text-white font-h3 rounded-xl uppercase tracking-widest shadow-lg shadow-error/20 transition-all"
            >
              Back_to_Home
            </motion.button>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 border border-error/30 text-error font-h3 rounded-xl uppercase tracking-widest hover:bg-error/10 transition-all"
          >
            Retry_Link
          </button>
        </div>

        {/* Console-like footer */}
        <div className="mt-12 pt-8 border-t border-error/10 flex justify-between items-center opacity-50">
          <p className="font-mono text-[10px] uppercase tracking-widest">Code: 0x404_NULL_REF</p>
          <p className="font-mono text-[10px] uppercase tracking-widest">Local_Time: {new Date().toLocaleTimeString()}</p>
        </div>
      </motion.div>

      {/* Decorative scanning line */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed left-0 right-0 h-[1px] bg-error/20 z-20 pointer-events-none"
      ></motion.div>
    </main>
  );
}
