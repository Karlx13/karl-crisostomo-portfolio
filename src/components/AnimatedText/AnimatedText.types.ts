import type { MotionProps } from 'motion/react';
import type { IStyledTextProps } from '../StyledText';

export interface IAnimatedTextProps extends MotionProps, IStyledTextProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}
