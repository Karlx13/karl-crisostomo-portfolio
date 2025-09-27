import { memo } from 'react';
import { StyledText } from '../StyledText';
import type { IAnimatedTextProps } from './AnimatedText.types';
import { type Variants } from 'motion/react';
import { cn } from '@/utils';
import { useAnimationView } from '@/hooks';

const letterVariants: Variants = {
  initial: { opacity: 0, y: 12, filter: 'blur(10px)' },
  enter: (idx: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.25,
      delay: 0.25 + idx * 0.06,
      ease: [0.25, 0.8, 0.5, 1],
    },
  }),
  exit: (idx: number) => ({
    opacity: 0,
    y: -8,
    filter: 'blur(10px)',
    transition: {
      duration: 0.2,
      delay: idx * 0.04,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const AnimatedText = memo<IAnimatedTextProps>(
  ({ children, className, once = false, ...props }) => {
    const { ref, inView } = useAnimationView({
      options: {
        once: once,
        amount: 0.3,
      },
    });
    return (
      <section ref={ref} className="">
        {typeof children === 'string'
          ? children.split('').map((char, idx) => (
              <StyledText
                {...props}
                key={idx}
                className={cn('inline-block', className)}
                variants={letterVariants}
                initial="initial"
                animate={inView ? 'enter' : 'initial'}
                exit="exit"
                custom={idx}
              >
                {char === ' ' ? '\u00A0' : char}
              </StyledText>
            ))
          : children}
      </section>
    );
  },
);

AnimatedText.displayName = 'AnimatedText';
export default AnimatedText;
