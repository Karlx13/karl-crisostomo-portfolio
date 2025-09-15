import { memo } from 'react';
import type { IVerticalMileStoneProps } from './VerticalMilestone.types';
import { TimelineCard } from '../TimelineCard';

const VerticalMileStone = memo<IVerticalMileStoneProps>(({ milestones }) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <TimelineCard milestones={milestones} />
      {/* vertical line */}
      <div className="w-1 h-[500px] bg-gray-700" />
    </section>
  );
});

VerticalMileStone.displayName = 'VerticalMileStone';

export default VerticalMileStone;
