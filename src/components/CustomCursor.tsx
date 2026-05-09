"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      
      {/* Outer Ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.5 : 0.8,
        }}
        className="fixed top-[-12px] left-[-12px] w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998]"
      />
      
      {/* Inner Glow */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 4 : 0,
          opacity: isHovered ? 0.2 : 0,
        }}
        className="fixed top-[-20px] left-[-20px] w-12 h-12 bg-primary rounded-full blur-xl pointer-events-none z-[9997]"
      />
    </>
  );
}
