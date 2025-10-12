import type { Variants } from 'motion';

export const rowVariants: Variants = {
  rest: {
    color: 'white',
  },
  defaultRest: { color: 'white' },
  hover: {
    color: 'black',
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  popHover: {
    color: 'black',
    paddingLeft: 6,
    paddingRight: 6,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

export const bgVariants: Variants = {
  rest: { backgroundColor: 'transparent', scaleY: 0, originY: 0 },
  defaultRest: { backgroundColor: 'transparent' },
  popHover: {
    backgroundColor: 'white',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  hover: {
    scaleY: 1,
    backgroundColor: 'white',
    transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
  },
};

export const rowBorderBottomAnimation: Variants = {
  initial: {
    width: '0px',
    originX: 0,
  },
  enter: {
    width: '100%',
    originX: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

export const rowContentAnimation: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(3px)',
  },

  enter: (idx) => ({
    opacity: 1,
    filter: 'blur(0px)',

    transition: {
      delay: 0.4 + idx * 0.12,
      duration: 0.3,
      ease: 'easeIn',
    },
  }),
};

export const columnAnimation: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(3px)',
  },

  enter: (idx) => ({
    opacity: 1,
    filter: 'blur(0px)',

    transition: {
      delay: 0.4 + idx * 0.12,
      duration: 0.3,
      ease: 'easeIn',
    },
  }),
};
