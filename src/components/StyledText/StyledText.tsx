import { memo } from 'react';
import type { IStyledTextProps } from './StyledText.types';
import { cn } from '@/utils';
import { motion } from 'motion/react';

const StyledText = memo<IStyledTextProps>(({ as: Tag = 'p', className, children, ...props }) => {
  const MotionTag = motion.create(Tag);
  return (
    <MotionTag {...props} className={cn(' text-sm w-fit', className)}>
      {children}
    </MotionTag>
  );
});

StyledText.displayName = 'StyledText';

export default StyledText;
