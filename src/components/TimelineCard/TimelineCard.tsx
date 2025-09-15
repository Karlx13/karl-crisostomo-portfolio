import { memo } from 'react';
import type { ITimelineCardProps } from './TimelineCard.types';
import { StyledText } from '../StyledText';

const TimelineCard = memo<ITimelineCardProps>(({ milestones }) => (
  <section>
    {milestones.map((milestone) => (
      <div key={milestone.id}>
        <StyledText as="h1" text={milestone.company} />
      </div>
    ))}
  </section>
));

TimelineCard.displayName = 'TimeLineCard';

export default TimelineCard;
