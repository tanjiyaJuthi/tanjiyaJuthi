"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-20 px-4 md:px-gutter max-w-container-max mx-auto overflow-hidden"
      id="home"
    >
      {/* Luminous Orbs for Depth - Softer Movement */}
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="luminous-orb bg-primary top-[-10%] right-[-10%]"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="luminous-orb bg-secondary bottom-[20%] left-[-10%]"
      ></motion.div>

      <div className="grid grid-cols-12 gap-6 md:gap-gutter items-center py-10 md:py-xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-8"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-primary tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            System_v1.0.4_Initialize
          </motion.span>
          <h1 className="font-display text-display uppercase mb-md leading-[1.1]">
            Modern Web <br />
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              className="text-gradient bg-[length:200%_auto]"
            >
              Architect
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="font-body-lg text-on-surface-variant max-w-2xl mb-lg"
          >
            Architecting high-frequency digital experiences at the
            intersection of brutalist aesthetics and high-performance
            engineering. Focused on low-latency interactions and
            maximum-impact visual communication.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-md">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              download
              href="/cv/tanjiya.pdf"
              className="primary-btn-gradient px-6 py-4 md:px-lg md:py-md rounded-xl font-h3 text-white text-center shadow-lg shadow-primary/20"
            >
              DOWNLOAD_RESUME
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255, 180, 163, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/tanjiyaJuthi?tab=repositories" target="_blank"
              className="border border-primary text-primary px-6 py-4 md:px-lg md:py-md rounded-xl font-h3 transition-all text-center"
            >
              VIEW_MY_WORK
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-4 relative mt-lg lg:mt-0"
        >
          <div
            className="glass-panel aspect-square rounded-[2rem] overflow-hidden hover:rotate-3 transition-transform duration-700 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] h-[500px] mx-auto rounded-xl overflow-hidden glass-card p-base border-2 border-primary/20"
            >
              <Image 
                alt="Tanjiya Zahir Bhuiyan"
                className="w-full h-full object-contain rounded-lg grayscale hover:grayscale-0 transition-all duration-1000"
                src="/assets/fallback.jpg"
                width={400}
                height={500}
                priority
              />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute -bottom-base -left-base glass-panel p-md rounded-xl border border-secondary/30 shadow-xl"
          >
            <span className="font-label-md text-secondary tracking-widest">STATUS: ONLINE</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
