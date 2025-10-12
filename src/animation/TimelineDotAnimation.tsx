import type { Variants } from 'motion';

export const TimelineDotAnimation: Variants = {
  initial: {
    backgroundColor: '#000000',
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  enter: (isSelected: boolean) => ({
    backgroundColor: isSelected ? '#ffffff' : '#000000',
    scale: isSelected ? 1.1 : 1,
    boxShadow: isSelected ? '0 0 10px rgba(0,0,0,0.3)' : '0 0 0 rgba(0,0,0,0)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  }),
  exit: {
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};
