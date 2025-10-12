import type { Variants } from 'motion';

export const CTAButtonAnimation: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(6px)',
  },
  enter: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
