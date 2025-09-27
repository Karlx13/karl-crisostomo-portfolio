import type { Variants } from 'motion';

export const FluxTextAnimation: Variants = {
  rest: {
    top: '0%',
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  hover: {
    top: '-100%',
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  active: {
    top: '-100%',
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
