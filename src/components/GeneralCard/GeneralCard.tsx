import { memo } from 'react';
import type { IGeneralCardProps } from './GeneralCard.types';
import { cn } from '@/utils';

const GeneralCard = memo<IGeneralCardProps>(({ className, children }) => (
  <div className={cn('rounded-md w-full border-2 border-gray-400', className)}>{children}</div>
));

GeneralCard.displayName = 'GeneralCard';

export default GeneralCard;
