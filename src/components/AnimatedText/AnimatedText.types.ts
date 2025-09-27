import type { MotionProps } from 'motion/react';

export interface IAnimatedTextProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}
