/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import LocomotiveScroll from 'locomotive-scroll';

interface LocomotiveScrollWrapperProps {
  children: ReactNode;
  options?: {
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    [key: string]: any;
  };
}

const LocomotiveScrollProvider = ({ children, options = {} }: LocomotiveScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      lenisOptions: {
        smooth: true,
        lerp: 0,
        duration: 1.0,
        multiplier: 1.0,
        ...options,
      },
    });

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [options]);

  // Scroll to top on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return <div ref={scrollRef}>{children}</div>;
};

export default LocomotiveScrollProvider;
