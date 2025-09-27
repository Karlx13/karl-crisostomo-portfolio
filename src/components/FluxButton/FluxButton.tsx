import { memo } from 'react';
import type { IFluxButtonProps } from './FluxButton.types';
import { motion } from 'motion/react';
import FluxText from '../FluxText/FluxText';
import { cn } from '@/utils';

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
    {/* 👻 ghost span only uses the longer label */}
    <span className="invisible font-bold uppercase  min-[375px]:text-xs sm:text-sm px-1 ">
      {topLabel.length >= bottomLabel.length ? topLabel : bottomLabel}
    </span>

    {/* 🎬 animated overlay */}
    <FluxText topLabel={topLabel} bottomLabel={bottomLabel} />
  </motion.button>
));

FluxButton.displayName = 'FluxButton';

export default FluxButton;
