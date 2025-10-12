import { CTAButton, StyledText } from '@/components';
import { SectionWrapper } from '@/containers';

const ErrorPage = () => {
  return (
    <SectionWrapper>
      <div className="mb-6 flex flex-col items-center gap-2">
        <StyledText className="text-5xl md:text-6xl lg:text-8xl mb-2">404</StyledText>
        <StyledText>
          You might have followed a broken link or entered a page that's no longer here.
        </StyledText>
        <StyledText>Let's get you back on track.</StyledText>
      </div>

      <CTAButton target="/" label="Back" />
    </SectionWrapper>
  );
};

export default ErrorPage;
