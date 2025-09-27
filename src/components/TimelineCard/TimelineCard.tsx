import { memo } from 'react';
import type { ITimelineCardProps } from './TimelineCard.types';
import { StyledText } from '../StyledText';

const TimelineCard = memo<ITimelineCardProps>(({ milestones, isActive }) => (
  <section className="flex flex-col">
    <div className="flex items-baseline gap-3">
      <div className="flex-col flex min-w-[150px] text-left">
        <StyledText className="font-bold">{milestones.title} </StyledText>
        <StyledText as="h1">{milestones.company}</StyledText>

        {/* technology stack  */}

        <div className="flex gap-1 font-semibold">
          {isActive && milestones.technologies?.map((item) => <StyledText>{item}</StyledText>)}
        </div>
      </div>
      <span className="border flex flex-col items-center justify-center rounded-full px-2">
        <StyledText className=" text-xs font-semibold border-gray-300">
          {milestones.date}
        </StyledText>
      </span>
    </div>
  </section>
));

TimelineCard.displayName = 'TimeLineCard';

export default TimelineCard;
