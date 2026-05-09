"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-gutter max-w-container-max mx-auto overflow-hidden" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-12 md:mb-20"
      >
        <span className="font-mono text-primary tracking-[0.4em] uppercase text-xs block mb-2">Project_Archive</span>
        <h2 className="font-display text-display uppercase tracking-tighter leading-none">
          System_Output<span className="text-primary">.dev</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-6 md:gap-gutter">
        {/* Massive Project Block 1: TILES HOUSE */}
        <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-[2rem] h-[500px] glass-panel shadow-2xl">
          <Image alt="Tiles House"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
            src="/assets/tiles_house.png" fill />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-lg w-full z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-display text-h1 text-on-surface mb-sm uppercase">TILES HOUSE</h3>
            <p className="text-on-surface-variant mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              A frontend web application using modern JavaScript frameworks,
              implementing a tile-based architecture for interactive data
              visualization.
            </p>
            <a className="inline-flex items-center gap-sm text-primary font-h3 hover:gap-md transition-all"
              href="https://tiles-house.vercel.app/" target="_blank" rel="noopener noreferrer">
              EXPLORE_TILES_HOUSE
              <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
        </div>

        {/* Secondary Project Block 1: Redis_Cache */}
        <div
          className="col-span-12 lg:col-span-4 glass-panel p-lg rounded-[2rem] flex flex-col justify-between hover:border-secondary transition-all shadow-xl group">
          <div>
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-md group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-on-surface text-h3" style={{ fontVariationSettings: '"FILL" 1' }}>terminal</span>
            </div>
            <h3 className="font-h2 text-h2 mb-sm group-hover:text-secondary transition-colors uppercase">Redis_cache</h3>
            <p className="font-body-md text-on-surface-variant">
              Engineered a high-performance API caching layer using Express.js and Redis for low-latency retrieval.
            </p>
          </div>
          <div className="mt-lg">
            <a href="https://github.com/tanjiyaJuthi/get-data-from-api-using-express-redis-cache" target="_blank"
              rel="noopener noreferrer"
              className="w-full py-sm border border-secondary text-secondary rounded-lg font-label-md hover:bg-secondary transition-all inline-flex items-center justify-center">
              CHECK_GIT_HUB
            </a>
          </div>
        </div>

        {/* Secondary Project Block 2: Techwave */}
        <div
          className="col-span-12 lg:col-span-5 glass-panel p-lg rounded-[2rem] group overflow-hidden relative min-h-[400px] shadow-xl">
          <Image className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
            alt="Techwave"
            src="/assets/tech_wave.png" fill />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <h3 className="font-h1 text-h2 uppercase group-hover:text-primary transition-colors">Techwave</h3>
            <p className="font-body-md text-on-surface-variant">
              Architected a responsive frontend system using Tailwind CSS, emphasizing modular UI engineering.
            </p>
            <a href="https://tanjiyajuthi.github.io/tech-wave-using-tailwind/" target="_blank" rel="noopener noreferrer"
              className="self-start text-on-surface border-b border-on-surface font-label-md pb-xs inline-block hover:text-primary transition-all">
              LIVE_LINK
            </a>
          </div>
        </div>

        {/* Massive Project Block 2: Keen Keeper */}
        <div
          className="col-span-12 lg:col-span-7 group relative overflow-hidden rounded-[2rem] h-[400px] glass-panel shadow-2xl">
          <Image alt="Keen Keeper"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
            src="/assets/keenKeeper.png" fill />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          <div className="absolute top-10 right-10 text-right z-10">
            <h3 className="font-h1 text-h2 group-hover:text-primary transition-colors uppercase">Keen Keeper</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs ml-auto">
              Real-time spectral analysis and visual frequency mapping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
