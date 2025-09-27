import { AnimatedText } from '@/components';
import { SectionWrapper } from '@/containers/SectionWrapper';
import { AboutMe } from './components';
import { AboutMeData, INTRO_LINES } from '@/constants';

const Home = () => {
  return (
    <>
      {/* <SectionWrapper variants={SectionWrapperAnimation}>
        <section className="flex flex-col items-center justify-center my-24">
          <img className="w-[300px] h-[300px] rounded-md bg-gray-400" />a
          <StyledText className="mt-4 max-w-2xl text-center">Software developer</StyledText>
        </section>

        <section className="mt-8 relative">
          <span className="flex gap-2">
            <MoveDownRight size={18} />
            <StyledText className="font-semibold"> Scroll down</StyledText>
          </span>

          <AnimatedText className="uppercase text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-bold tracking-widest">
            Karl Crisostomo
          </AnimatedText>
        </section>
      </SectionWrapper> */}

      <SectionWrapper className="uppercase font-press-start-2p flex flex-col gap-3">
        {INTRO_LINES.map((text, idx) => (
          <AnimatedText
            once
            key={idx}
            className="min-[200px]:text-sm min-[400px]:text-base min-[430px]:text-lg md:text-3xl  2xl:text-5xl"
          >
            {text}
          </AnimatedText>
        ))}
      </SectionWrapper>

      <SectionWrapper className="max-[600px]:mb-24" variants={undefined}>
        <AboutMe className="text-left  md:max-w-2xl xl:max-w-3xl" about={AboutMeData} />
      </SectionWrapper>
    </>
  );
};

export default Home;
