import { memo } from 'react';
import { cn } from '../../lib/utils';
import type { IGeneralCardProps } from './GeneralCard.types';

const GeneralCard = memo<IGeneralCardProps>(({ className, children }) => (
  <div className={cn('rounded-md w-full border-2 border-gray-400', className)}>{children}</div>
));

GeneralCard.displayName = 'BentoCard';

export default GeneralCard;
