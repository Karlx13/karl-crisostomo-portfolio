import { StyledText } from '@/components';
import type { IAboutMeProps } from './AboutMe.types';
import { cn, highlightWords } from '@/utils';
import { Fragment } from 'react';

const AboutMe = ({ className, about }: IAboutMeProps) => {
  return (
    <section className={className}>
      {about.map((item, idx) => (
        <StyledText key={idx} className="mt-4 leading-relaxed tracking-wide">
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
