import type { Variants } from 'motion';

export const ProgressBarAnimation: Variants = {
  rest: { width: '0%' },
  hover: {
    width: '100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};
