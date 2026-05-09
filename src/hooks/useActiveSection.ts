import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // If at the bottom of the page, set the last section as active
      if (scrollPosition + windowHeight >= docHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the section that takes up most of the top half of the screen
      const midPoint = scrollPosition + windowHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (midPoint >= top && midPoint < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};
