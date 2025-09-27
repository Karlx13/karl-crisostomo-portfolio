import { cn } from '@/utils';
import type { ISectionWrapperProps } from './SectionWrapper.types';
import { useMemo, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OnRenderAnimation } from '@/animation';

const SectionWrapper = ({ children, className, variants, ...props }: ISectionWrapperProps) => {
  const viewRef = useRef(null);

  const isInView = useInView(viewRef, {
    once: false,
    amount: 0.3,
  });

  console.log('isInview?:', isInView);

  const animation = useMemo(() => variants || OnRenderAnimation, [variants]);

  return (
    <motion.section
      variants={animation}
      initial="initial"
      animate={isInView ? 'enter' : 'initial'}
      exit="exit"
      {...props}
      ref={viewRef}
      className={cn('h-dvh flex flex-col justify-center items-center', className)}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
