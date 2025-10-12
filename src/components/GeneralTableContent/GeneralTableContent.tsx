import { memo } from 'react';
import { StyledText } from '../StyledText';
import type { IGeneralTableContentProps } from './GeneralTableContent.types';
import { CTAButton } from '../CTAButton';

const GeneralTableContent = memo<IGeneralTableContentProps>(({ projectContent }) => (
  <section className="relative mb-4">
    <div className="flex flex-col items-baseline gap-2">
      <StyledText className="text-left min-[0px]:text-sm sm:text-lg max-w-4xl">
        {projectContent?.description}
      </StyledText>

      {projectContent?.link && (
        <CTAButton
          target={projectContent?.link ?? ''}
          className="text-black  bg-gray-200 text-sm px-3 py-2 font-semibold capitalize hover:text-black hover:border-transparent hover:bg-white transition-all duration-75"
          newTab
          label="See Website"
        />
      )}
    </div>

    <div className="flex min-[375px]:flex-col md:flex-row items-center justify-between mt-6 gap-2 relative">
      {projectContent?.images.map((img) => (
        <div key={img.alt} className="w-full md:w-1/2">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto aspect-video object-fill border border-white/20"
          />
        </div>
      ))}
    </div>
  </section>
));

GeneralTableContent.displayName = 'GeneralTableContent';

export default GeneralTableContent;
