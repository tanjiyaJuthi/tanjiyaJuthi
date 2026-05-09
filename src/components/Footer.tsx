import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-surface-variant py-10 md:py-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl group-hover:bg-primary/20 transition-colors">
                <span className="font-display font-black text-primary text-xl leading-none">tj</span>
              </div>
              <span
                className="font-display text-h2 font-black tracking-tighter text-on-surface">
                tanjiya<span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Juthi</span><span
                    className="text-primary">.</span>
              </span>
            </Link>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              MERN Stack Developer crafting high-performance, user-centric web applications with modern aesthetics and scalable architectures.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['MERN', 'Next.js', 'Tailwind'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-surface-container rounded-md border border-white/5 text-on-surface-variant">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Status & CTA */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-mono uppercase tracking-[0.2em] text-primary/70">Availability</h4>
            <div className="status-pill inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-label-md text-on-surface text-sm uppercase tracking-wider">Available for work</span>
            </div>
            <div className="pt-4">
              <Link href="#contact" className="group flex items-center gap-2 text-on-surface hover:text-primary transition-all font-h3">
                Let's work together
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-mono uppercase tracking-[0.2em] text-primary/70">Navigation</h4>
            <ul className="space-y-3 dot-list pl-4">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item} className="relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-primary text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                  <Link href={`#${item.toLowerCase()}`} className="text-on-surface-variant hover:text-primary transition-colors font-label-md uppercase tracking-widest text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Connect */}
          <div className="space-y-6">
            <h4 className="text-[12px] font-mono uppercase tracking-[0.2em] text-primary/70">Socials</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link href="https://github.com/tanjiyaJuthi" target="_blank" rel="noopener noreferrer"
                className="social-card flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all group">
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                <span className="text-xs font-label-md">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/tanjiya/" target="_blank" rel="noopener noreferrer"
                className="social-card flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-secondary/50 transition-all group">
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                <span className="text-xs font-label-md">LinkedIn</span>
              </Link>
              <Link href="mailto:tanjiya098@gmail.com" target="_blank" rel="noopener noreferrer"
                className="social-card flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all group">
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-xs font-label-md">Email</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-divider pt-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 md:mb-0"
          data-purpose="copyright-bar">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[11px] text-on-surface-variant font-mono tracking-tight">
              &copy; 2026 <span className="text-on-surface">tanjiya<span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Juthi</span><span
                  className="text-primary">.</span></span> &mdash; All rights reserved.
            </p>
            <div className="text-[11px] text-on-surface-variant font-mono flex items-center gap-1">
              Built with <span className="text-pink-500"> &#10084; </span> by
              <Link href="#home" className="inline-flex items-center gap-1 ml-1 group">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded border border-primary/20 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-[10px] font-display font-black leading-none text-primary">tj</span>
                </span>
                <span
                  className="text-sm font-display font-black tracking-tight text-on-surface group-hover:opacity-80 transition-opacity">
                  tanjiya<span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Juthi</span><span
                      className="text-primary">.</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex gap-6">
            <Link className="text-[10px] text-on-surface-variant hover:text-on-surface transition-colors font-mono uppercase tracking-widest"
              href="#">Privacy</Link>
            <Link className="text-[10px] text-on-surface-variant hover:text-on-surface transition-colors font-mono uppercase tracking-widest"
              href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
