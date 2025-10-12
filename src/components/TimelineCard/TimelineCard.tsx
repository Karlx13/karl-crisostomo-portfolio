import { memo } from 'react';
import type { ITimelineCardProps } from './TimelineCard.types';
import { StyledText } from '../StyledText';
import { motion } from 'motion/react';
import { cn } from '@/utils';

const TimelineCard = memo<ITimelineCardProps>(({ milestones, isActive }) => (
  <motion.section className="flex flex-col" layout>
    <div className="flex items-baseline gap-3">
      <div className="flex-col flex min-w-[150px] text-left">
        <StyledText className="font-bold">{milestones.title} </StyledText>
        <StyledText as="h1">{milestones.company}</StyledText>

        {milestones.achievements && (
          <StyledText className="text-white/50">{milestones.achievements}</StyledText>
        )}

        {/* technology stack  */}

        <div className="flex gap-1 font-light flex-wrap text-white/50">
          {milestones.technologies?.map((item, idx, arr) => (
            <StyledText key={idx}>
              {item}

              {idx < arr.length - 1 && <span>,</span>}
            </StyledText>
          ))}
        </div>
      </div>

      <span
        className={cn(
          'border border-white/10 flex flex-col items-center justify-center rounded-full  py-1 px-3',
          isActive && 'bg-blue-400/10 border-blue-400/10',
        )}
      >
        <StyledText className=" text-xs font-semibold border-gray-300">
          {milestones.date}
        </StyledText>
      </span>
    </div>
  </motion.section>
));

TimelineCard.displayName = 'TimeLineCard';

export default TimelineCard;
