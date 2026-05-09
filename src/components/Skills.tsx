"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'code', desc: 'Strictly typed systems and enterprise-grade architecture.', color: 'text-primary', border: 'hover:border-primary/50' },
    { name: 'Next.js', icon: 'rocket_launch', desc: 'SSR optimization and high-speed delivery pipelines.', color: 'text-secondary', border: 'hover:border-secondary/50' },
    { name: 'Express', icon: 'layers', desc: 'Rapid prototyping with utility-first precision.', color: 'text-tertiary', border: 'hover:border-tertiary/50' },
    { name: 'Mongo', icon: 'database', desc: 'Relational mapping for complex data clusters.', color: 'text-primary-container', border: 'hover:border-primary-container/50' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  } as const;

  return (
    <section className="bg-surface-container-lowest py-16 md:py-24 overflow-hidden" id="skills">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 mb-16 border-l-4 border-primary pl-md"
        >
          <span className="font-mono text-primary tracking-[0.4em] uppercase text-xs">Capability_Matrix</span>
          <h2 className="font-display text-h1 uppercase tracking-tighter">System_Tools</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.3 }
              }}
              className={`glass-panel p-lg rounded-2xl flex flex-col gap-sm transition-all group shadow-xl border border-white/5 ${skill.border}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`material-symbols-outlined ${skill.color} text-4xl group-hover:scale-110 transition-transform duration-500`}>
                  {skill.icon}
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant opacity-30">0{index + 1}</span>
              </div>
              <h3 className="font-display text-h2 uppercase tracking-tight group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
