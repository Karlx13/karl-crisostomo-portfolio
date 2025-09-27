import { StyledText } from '@/components';
import type { IAboutMeProps } from './AboutMe.types';
import { cn, highlightWords } from '@/utils';
import { Fragment } from 'react';
import { AboutMeAnimation } from '@/animation';
import { useAnimationView } from '@/hooks';

const AboutMe = ({ className, about }: IAboutMeProps) => {
  const { ref, inView } = useAnimationView({
    options: {
      once: false,
      amount: 0.4,
    },
  });

  return (
    <section className={className} ref={ref}>
      {about.map((item, idx) => (
        <StyledText
          variants={AboutMeAnimation}
          custom={idx}
          initial="initial"
          animate={inView ? 'enter' : 'initial'}
          exit="exit"
          key={idx}
          className="min-[375px]:text-sm min-[430px]:text-base sm:text-xl 2xl:text-base mb-6 tracking-wider leading-9"
        >
          {highlightWords(item.paragraph ?? '').map((part, i) =>
            part.isHighlighted ? (
              <span key={i} className={cn('font-bold', part.className)}>
                {part.text}
              </span>
            ) : (
              <Fragment key={i}>{part.text}</Fragment>
            ),
          )}
        </StyledText>
      ))}
    </section>
  );
};

export default AboutMe;
