import { AnimatedText, StyledText } from '@/components';
import { SectionWrapper } from '@/containers/SectionWrapper';
import { MoveDownRight } from 'lucide-react';
import { AboutMe } from './components';
import { AboutMeData } from '@/constants';

const Home = () => {
  const currentyear = new Date().getFullYear();

  return (
    <>
      <SectionWrapper>
        <section className="flex flex-col items-center justify-center my-24">
          <img className="w-[300px] h-[300px] rounded-md bg-gray-400" />
          <StyledText className="mt-4 max-w-2xl text-center">Software developer</StyledText>
        </section>

        <section className="mt-8 relative">
          <span className="flex gap-2">
            <MoveDownRight size={18} />
            <StyledText className="font-semibold"> Scroll down</StyledText>
          </span>

          <AnimatedText className="uppercase text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-bold tracking-wider">
            Karl Crisostomo
          </AnimatedText>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <AboutMe className=" text-left text-lg  max-w-xl" about={AboutMeData} />
      </SectionWrapper>
    </>
  );
};

export default Home;
