import React from 'react';

const Background = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest" id="background">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter">
        <div className="flex justify-between items-end mb-lg border-l-4 border-primary pl-md">
          <h2 className="font-h1 text-h1 uppercase">BACKGROUND_ARCHIVE</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-xl">
          {/* Education */}
          <div>
            <h2 className="font-h2 text-h2 mb-lg flex items-center gap-base">
              <span className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}>school</span>
              EDUCATION
            </h2>
            <div className="relative pl-lg border-l-2 border-white/10 space-y-xl">
              <div className="relative">
                <div
                  className="absolute -left-[calc(theme(spacing.lg)+6px)] top-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#ffb4a3]">
                </div>
                <h4 className="font-h3 text-h3 text-primary mb-xs">
                  BSc. Computer Science & Engineering
                </h4>
                <p className="text-label-md text-on-surface-variant mb-sm">
                  University of Development Alternative &bull; 2012 - 2016
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Graduated with honors. Specialized in architecting
                  high-performance full-stack systems at the intersection of
                  scalable web engineering and cloud-native infrastructure.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[calc(theme(spacing.lg)+6px)] top-2 w-4 h-4 bg-primary rounded-full"></div>
                <h4 className="font-h3 text-h3 text-primary mb-xs">
                  Higher Secondary School Certificate
                </h4>
                <p className="text-label-md text-on-surface-variant mb-sm">
                  Motijheel Model High School & College &bull; 2010 - 2011
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Specialized in Science studies with strong foundations in
                  mathematics, physics, and logical problem-solving.
                </p>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div>
            <h2 className="font-h2 text-h2 mb-lg flex items-center gap-base">
              <span className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: '"FILL" 1' }}>work</span>
              EXPERIENCE
            </h2>
            <div className="relative pl-lg border-l-2 border-white/10 space-y-xl">
              <div className="relative">
                <div
                  className="absolute -left-[calc(theme(spacing.lg)+6px)] top-2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_#ffb1c5]">
                </div>
                <h4 className="font-h3 text-h3 text-secondary mb-xs">
                  Fullstack Developer
                </h4>
                <p className="text-label-md text-on-surface-variant mb-sm">
                  Bootcamp &bull; 2026
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Completed a full-stack web development bootcamp with
                  hands-on experience in building responsive web applications,
                  API integration, and deployment workflows.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[calc(theme(spacing.lg)+6px)] top-2 w-4 h-4 bg-secondary rounded-full"></div>
                <h4 className="font-h3 text-h3 text-secondary mb-xs">
                  Junior Web Developer
                </h4>
                <p className="text-label-md text-on-surface-variant mb-sm">
                  Helix It Solutions &bull; 2017 - 2018
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Developed responsive web applications for international
                  brands using PHP and Wordpress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
