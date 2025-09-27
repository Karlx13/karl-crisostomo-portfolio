import type { MotionProps } from 'motion/react';
import type { JSX } from 'react';

export interface IStyledTextProps extends MotionProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}
