import { cn } from '@/utils';
import type { MotionProps } from 'motion/react';
import { memo, useCallback } from 'react';
import { motion } from 'motion/react';

interface CTAButtonProps extends MotionProps {
  target: string;
  label: string;
  newTab?: boolean;
  className?: string;
}

const CTAButton = memo<CTAButtonProps>(({ target, label, newTab, className, ...motionProps }) => {
  const handleClick = useCallback(() => {
    if (!target) return;

    if (newTab) {
      window.open(target, '_blank', 'noopener, noreferrer');
    } else {
      window.location.href = target;
    }
  }, [newTab, target]);

  return (
    <motion.button
      {...motionProps}
      type="button"
      className={cn(
        'border-[1px] border-white/20 hover:border-blue-500/20 hover:bg-blue-500/10 py-px px-4 rounded-full uppercase cursor-pointer transition-all duration-75',
        className,
      )}
      onClick={handleClick}
    >
      {label}
    </motion.button>
  );
});

CTAButton.displayName = 'CTAButton';
export default CTAButton;
