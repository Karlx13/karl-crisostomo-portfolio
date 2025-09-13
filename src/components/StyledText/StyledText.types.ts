import type { JSX } from 'react';

export interface IStyledTextProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  text: string;
}
