import type { Variants } from 'motion';

export const OnRenderAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};
