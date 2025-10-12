import { memo, type ElementType } from 'react';
import { cn } from '@/utils';
import { motion } from 'motion/react';
import type { IStyledTextProps } from './StyledText.types';

const StyledText = <T extends ElementType = 'p'>({
  as,
  className,
  children,
  ...props
}: IStyledTextProps<T>) => {
  const Tag = as || 'p';
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag {...props} className={cn('text-sm w-fit', className)}>
      {children}
    </MotionTag>
  );
};

export default memo(StyledText);
