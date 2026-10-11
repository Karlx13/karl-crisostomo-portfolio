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
      // A section can cross a high observer threshold between frames during a
      // quick scroll. Reveal it early and do not reset it after it is seen.
      once: true,
      amount: 0.15,
    },
  });

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-10 sm:mb-14 lg:mb-16">
        <AnimatedText className="text-left text-3xl font-bold uppercase md:text-4xl xl:text-6xl">
          Skills
        </AnimatedText>
      </div>

      <div
        ref={ref}
        className="grid w-full grid-cols-1 gap-x-3 gap-y-3 min-[360px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-5"
      >
        {data.map((skill, idx) => (
          <StyledText
            variants={ExpertiseAnimation}
            initial="initial"
            animate={inView ? 'enter' : 'initial'}
            exit="exit"
            custom={idx}
            key={skill}
            className={cn(
              'max-w-full rounded-full border border-white/10 px-3 py-1 text-left text-sm whitespace-nowrap transition-colors hover:bg-white/15 active:bg-white/15',
              skill === 'C++' && 'bg-blue-700/10',
              (skill === 'TypeScript' || skill === 'Next.js') && 'bg-blue-400/10',
              skill === 'JavaScript' && 'bg-yellow-400/10',
              skill === 'Sass' && 'bg-purple-400/20',
              skill === 'Xcode' && 'border-[#147EFB]/45 bg-[#147EFB]/20 hover:bg-[#147EFB]/30',
              skill === 'Android Development' && 'bg-green-400/10',
            )}
          >
            {skill}
          </StyledText>
        ))}
      </div>
    </div>
  );
});

Expertise.displayName = 'Expertise';

export default Expertise;
