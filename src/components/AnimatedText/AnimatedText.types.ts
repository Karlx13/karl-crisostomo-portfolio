import type { MotionProps } from 'motion/react';

export interface IAnimatedTextProps extends MotionProps {
  text: string;
  className?: string;
}
