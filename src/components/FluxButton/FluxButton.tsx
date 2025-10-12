import { memo } from 'react';
import type { IFluxButtonProps } from './FluxButton.types';
import { motion } from 'motion/react';
import FluxText from '../FluxText/FluxText';
import { cn } from '@/utils';
import { ProgressBarAnimation } from '@/animation';

const FluxButton = memo<IFluxButtonProps>(({ topLabel, bottomLabel, onClick, className }) => (
  <motion.button
    onClick={onClick}
    type="button"
    className={cn(
      'relative overflow-hidden cursor-pointer inline-flex items-center justify-center',
      className,
    )}
    initial="rest"
    whileHover="hover"
    whileTap="active"
    animate="rest"
  >
    <span className="invisible font-bold uppercase text-sm px-1">
      {topLabel.length >= bottomLabel.length ? topLabel : bottomLabel}
    </span>

    <FluxText topLabel={topLabel} bottomLabel={bottomLabel} />

    <motion.div
      className="absolute bottom-0 left-0 h-[2px] bg-white"
      variants={ProgressBarAnimation}
    />
  </motion.button>
));

FluxButton.displayName = 'FluxButton';

export default FluxButton;
