import { AnimatedText, CTAButton } from '@/components';
import { SectionWrapper } from '@/containers/SectionWrapper';
import { AboutMe, Contact, Expertise } from './components';
import { ABOUT_ME_DATA, CONTACT_DATA, EXPERTISE_DATA, INTRO_LINES } from '@/constants';
import { cn } from '@/utils';
import Resume from '@/assets/pdfs/KARL_CRISOSTOMO_RESUME.pdf';
import { CTAButtonAnimation } from '@/animation';

const Home = () => {
  return (
    <>
      <SectionWrapper>
        {INTRO_LINES.map((text, idx) => (
          <AnimatedText
            once
            key={idx}
            className={cn(
              'text-xs sm:text-lg font-spline-sans font-light',
              idx === 0 &&
                'text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-sofia-sans-condensed',
            )}
          >
            {text}
          </AnimatedText>
        ))}

        <CTAButton
          className="text-sm py-2 px-3 mt-2"
          variants={CTAButtonAnimation}
          initial="initial"
          animate="enter"
          exit="initial"
          newTab
          target={Resume}
          label="Resume"
        />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper>
        <AboutMe
          className="text-left sm:max-w-md xl:max-w-lg sm:self-center md:self-end"
          about={ABOUT_ME_DATA}
        />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="flex flex-col items-baseline">
        <Expertise data={EXPERTISE_DATA} />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <Contact data={CONTACT_DATA} />
      </SectionWrapper>
    </>
  );
};

export default Home;
