import type { Variants } from 'motion';

export const AboutMeAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 25,
    scale: 0.97,
    filter: 'blur(4px)',
  },
  enter: (idx: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.4 + idx * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    filter: 'blur(4px)',
    y: -20,
    scale: 0.96,
    transition: {
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
