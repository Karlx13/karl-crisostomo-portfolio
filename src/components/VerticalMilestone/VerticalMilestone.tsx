import { memo, useCallback, useState, useRef, useEffect } from 'react';
import type { IVerticalMileStoneProps } from './VerticalMilestone.types';
import { TimelineCard } from '../TimelineCard';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import { MileStoneAnimation, TimelineDotAnimation } from '@/animation';

const VerticalMileStone = memo<IVerticalMileStoneProps>(({ milestones }) => {
  const [selectedTimelime, setSelectedTimeline] = useState<number | null>(null);
  const heightsRef = useRef<Map<number, number>>(new Map()); // Store dynamic heights
  const [lineHeights, setLineHeights] = useState<Record<number, number>>({});

  useEffect(() => {
    if (milestones.length > 0) {
      const latestMilestone = milestones[milestones.length - 1];
      setSelectedTimeline(latestMilestone.id);
    }
  }, [milestones]);

  const handleTimelineSelect = useCallback((id: number) => {
    setSelectedTimeline(id);
  }, []);

  const setHeight = useCallback((id: number, el: HTMLDivElement | null) => {
    if (!el) return;

    const height = el.getBoundingClientRect().height;
    const prevHeight = heightsRef.current.get(id);

    if (height !== prevHeight) {
      heightsRef.current.set(id, height);
      setLineHeights((prev) => ({ ...prev, [id]: height }));
    }
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col">
        {[...milestones].reverse().map((milestone, idx) => {
          const isTimelineSelected = selectedTimelime === milestone.id;
          const height = lineHeights[milestone.id] ?? 100; // fallback height

          return (
            <motion.div
              variants={MileStoneAnimation}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={idx}
              key={milestone.id}
              onClick={() => handleTimelineSelect(milestone.id)}
              className={cn('flex items-baseline gap-2 relative')}
            >
              {/* Timeline dot indicator */}
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  variants={TimelineDotAnimation}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  custom={isTimelineSelected}
                  className={cn(
                    'w-3.5 h-3.5 z-20 border-2 border-white/20 rounded-full outline-1 outline-white/50 shadow-sm cursor-pointer',
                    !selectedTimelime && idx === 0 && 'bg-black ',
                  )}
                />

                {/* vertical line  */}
                <div
                  style={{ height }}
                  className={cn('relative w-px bg-white/20 transition-all duration-200')}
                />
              </div>

              {/* measure content height */}
              <div ref={(el) => setHeight(milestone.id, el)}>
                <TimelineCard milestones={milestone} isActive={isTimelineSelected} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

VerticalMileStone.displayName = 'VerticalMileStone';

export default VerticalMileStone;
