import type { MotionProps } from 'motion/react';
import type { ElementType } from 'react';

export type IStyledTextProps<T extends ElementType = 'p'> = MotionProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps> & {
    as?: T;
    className?: string;
    children: React.ReactNode;
  };
