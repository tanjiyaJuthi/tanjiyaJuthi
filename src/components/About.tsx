"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  } as const;

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-xl items-center">
          {/* Left Column: Visual Indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative space-y-md"
          >
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary-container/10 blur-[120px] -z-10">
            </div>
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass-card rounded-[2.5rem] p-lg flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-[450px] relative overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150">
              </div>
              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="font-display text-[6rem] text-primary leading-none mb-4"
                >
                  2+
                </motion.h2>
                <h3 className="font-display text-h2 text-on-surface leading-tight tracking-tighter">
                  YEARS OF<br />ENGINEERING
                </h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-container/50 backdrop-blur-md rounded-2xl p-md flex items-center gap-md border border-outline-variant/10 hover:border-primary/30 transition-all shadow-lg"
            >
              <div
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-h3">verified_user</span>
              </div>
              <div>
                <h4 className="font-h3 text-h3 text-on-surface tracking-tight">
                  Fullstack Specialist
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  High-Frequency Digital Solutions
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-lg">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-sm"
            >
              <span className="font-mono text-primary tracking-[0.3em] block uppercase text-xs">// About_Me</span>
              <h2 className="font-display text-display uppercase leading-none tracking-tighter">
                Evolving Through <br />
                <span className="text-primary">Digital Complexity</span>
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Dedicated MERN stack developer with a passion for building clean,
                high-performance web applications. My approach combines brutalist
                architectural principles with cutting-edge React ecosystem practices. I also love to do the following:
              </p>
            </motion.div>

            {/* Nested Bento Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            >
              {[
                { img: '/assets/hobby_cooking.png', title: 'Cooking', desc: 'Precision & Creativity.' },
                { img: '/assets/hobby_fitness.png', title: 'Fitness', desc: 'Discipline & Logic.' },
                { img: '/assets/hobby_gardening.png', title: 'Nature', desc: 'Organic Growth.' }
              ].map((hobby, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden mb-4 relative shadow-xl border border-white/5 bg-surface-container">
                    <Image alt={hobby.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      src={hobby.img} width={300} height={300} />
                  </div>
                  <h3 className="font-h3 text-on-surface group-hover:text-primary transition-colors">{hobby.title}</h3>
                  <p className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest">
                    {hobby.desc}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
