import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-20">
        <Link href="#home" className="flex items-center gap-3 cursor-pointer group">
          {/* Monogram Icon */}
          <div
            className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl group-hover:bg-primary/20 transition-colors">
            <span className="font-display font-black text-primary text-xl leading-none">tj</span>
          </div>
          {/* Text Logo */}
          <span
            className="font-display text-h2 font-black tracking-tighter text-on-surface group-hover:opacity-80 transition-opacity">
            tanjiya<span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Juthi</span><span
              className="text-primary">.</span>
          </span>
        </Link>
        <div>
          <Link href="#contact">
            <button
              className="primary-btn-gradient px-4 py-2 md:px-md md:py-sm rounded-lg font-label-md text-white transition-all hover:opacity-80 scale-95 active:scale-90 text-sm md:text-base">
              initialize_project
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
