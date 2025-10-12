import { cn } from '@/utils';
import type { ISectionWrapperProps } from './SectionWrapper.types';
import { motion } from 'motion/react';
import { useAnimationView } from '@/hooks';

const SectionWrapper = ({ children, className, variants, ...props }: ISectionWrapperProps) => {
  const { ref, inView } = useAnimationView({
    options: {
      once: false,
      amount: 0.7,
    },
  });

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
      exit="exit"
      {...props}
      ref={ref}
      className={cn('min-h-dvh flex flex-col justify-center items-center', className)}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
