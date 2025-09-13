import { memo } from 'react';
import type { IStyledTextProps } from './StyledText.types';
import { cn } from '../../lib/utils';

const StyledText = memo<IStyledTextProps>(({ as: Tag = 'p', className, text }) => (
  <Tag className={cn('text-gray-800 text-sm w-fit', className)}>{text}</Tag>
));

StyledText.displayName = 'StyledText';

export default StyledText;
