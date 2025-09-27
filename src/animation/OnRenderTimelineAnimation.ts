import type { Variants } from 'motion';

export const OnRenderTimelineAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  enter: (idx) => ({
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.5 + idx * 0.1,
      ease: [0.55, 1, 0.68, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};
