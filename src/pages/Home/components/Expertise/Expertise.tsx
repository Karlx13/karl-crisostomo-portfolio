import { AnimatedText, StyledText } from '@/components';
import { useAnimationView } from '@/hooks';
import { cn } from '@/utils';
import type { Variants } from 'motion';
import { memo } from 'react';

const ExpertiseAnimation: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(4px)',
  },

  enter: (idx: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      delay: 0.4 + idx * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  exit: {
    opacity: 0,
    filter: 'blur(4px)',
  },
};

interface ExpertiseProps {
  data: string[];
}

const Expertise = memo<ExpertiseProps>(({ data }) => {
  const { ref, inView } = useAnimationView({
    options: {
      once: false,
      amount: 0.7,
    },
  });

  return (
    <>
      <AnimatedText className="uppercase text-left text-3xl md:text-4xl xl:text-6xl mb-24 font-bold">
        Skills
      </AnimatedText>

      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-2xl">
        {data.map((skill, idx) => (
          <StyledText
            variants={ExpertiseAnimation}
            initial="initial"
            animate={inView ? 'enter' : 'initial'}
            exit="exit"
            custom={idx}
            key={idx}
            className={cn(
              'border px-3 py-1 rounded-full border-white/10 active:bg-white/15 hover:bg-white/15 text-left whitespace-nowrap',
              skill === 'C++' && 'bg-blue-700/10',
              (skill === 'TypeScript' || skill === 'Next.js') && 'bg-blue-400/10',
              skill === 'JavaScript' && 'bg-yellow-400/10',
              skill === 'Sass' && 'bg-purple-400/20',
              skill === 'Android Development' && 'bg-green-400/10',
            )}
          >
            {skill}
          </StyledText>
        ))}
      </div>
    </>
  );
});

Expertise.displayName = 'Expertise';

export default Expertise;
