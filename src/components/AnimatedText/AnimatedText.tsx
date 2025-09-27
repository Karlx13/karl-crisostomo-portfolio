import { memo } from 'react';
import { StyledText } from '../StyledText';
import type { IAnimatedTextProps } from './AnimatedText.types';
import { type Variants } from 'motion/react';
import { cn } from '@/utils';

const letterVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  enter: (idx) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
      delay: 0.5 + idx * 0.1,
      ease: 'easeInOut',
    },
  }),
  exit: (idx) => ({
    opacity: 0,
    transition: {
      duration: 0.35,
      delay: 0.5 + idx * 0.1,
      ease: 'easeInOut',
    },
  }),
};

const AnimatedText = memo<IAnimatedTextProps>(({ children, className, ...props }) => (
  <>
    {children.split('').map((char, idx) => (
      <StyledText
        {...props}
        className={cn('inline-block', className)}
        variants={letterVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={idx}
      >
        {char === ' ' ? '\u00A0' : char}
      </StyledText>
    ))}
  </>
));

AnimatedText.displayName = 'AnimatedText';
export default AnimatedText;
