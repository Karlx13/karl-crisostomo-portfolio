import { memo } from 'react';
import { StyledText } from '../StyledText';
import { motion } from 'motion/react';
import type { IFluxTextProps } from './FluxText.types';
import { FluxTextAnimation } from '@/animation';

const FluxText = memo<IFluxTextProps>(({ topLabel, bottomLabel }) => (
  <motion.div
    className="absolute inset-0  justify-between items-center font-bold uppercase px-1"
    variants={FluxTextAnimation}
  >
    <StyledText className="min-[375px]:text-xs sm:text-sm" as="div">
      {topLabel}
    </StyledText>
    <StyledText className="min-[375px]:text-xs sm:text-sm" as="div">
      {bottomLabel}
    </StyledText>
  </motion.div>
));

FluxText.displayName = 'FluxText';

export default FluxText;
