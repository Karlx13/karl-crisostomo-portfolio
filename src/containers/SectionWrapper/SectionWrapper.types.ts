import type { MotionProps } from 'motion/react';

export interface ISectionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}
