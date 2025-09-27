import { memo, useCallback, useState } from 'react';
import type { IVerticalMileStoneProps } from './VerticalMilestone.types';
import { TimelineCard } from '../TimelineCard';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import { OnRenderTimelineAnimation } from '@/animation';

const VerticalMileStone = memo<IVerticalMileStoneProps>(({ milestones }) => {
  const [selectedTimelime, setSelectedTimeline] = useState<number | null>(null);

  const handleTimelineSelect = useCallback((id: number) => {
    setSelectedTimeline(id);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col">
        {[...milestones].reverse().map((milestone, idx) => {
          const isTimelineSelected = selectedTimelime === milestone.id;
          return (
            <motion.div
              variants={OnRenderTimelineAnimation}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={idx}
              key={milestone.id}
              onClick={() => handleTimelineSelect(milestone.id)}
              className={cn('flex h-full items-baseline gap-2 relative')}
            >
              <div className="flex flex-col items-center justify-center ">
                {/* dot */}
                <div
                  className={cn(
                    'w-3.5 h-3.5 z-20 block border-2 border-gray-300 rounded-full outline-1 outline-white hover:bg-black transition-all duration-75  hover:shadow-lg hover:shadow-black',
                    !selectedTimelime && idx === 0 && 'bg-black',
                    isTimelineSelected && 'bg-black',
                  )}
                />

                {/* Vertical line */}

                <div
                  className={cn(
                    'relative w-px bg-gray-300 min-h-[100px]',
                    idx === milestones.length - 1 &&
                      'after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-t after:from-white after:to-transparent',
                  )}
                />
              </div>

              <TimelineCard milestones={milestone} isActive={isTimelineSelected} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

VerticalMileStone.displayName = 'VerticalMileStone';

export default VerticalMileStone;
