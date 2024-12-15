// MomentumScroll.tsx
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  SpringOptions,
} from "framer-motion";

interface MomentumScrollProps {
  children: React.ReactNode;
}

const MomentumScroll = ({ children }: MomentumScrollProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);

  // Handle scroll to section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const resizeScrollableHeight = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setScrollableHeight(entry.contentRect.height);
      }
    },
    []
  );

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const resizeObserver = new ResizeObserver(resizeScrollableHeight);
    resizeObserver.observe(scrollRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight]
  );

  const springPhysics: SpringOptions = {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  };

  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: springNegativeScrollY }}
        className="fixed top-0 left-0 w-full overflow-hidden [will-change:transform]"
      >
        {children}
      </motion.div>
      <div style={{ height: scrollableHeight }} />
    </>
  );
};

export default MomentumScroll;