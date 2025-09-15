import { ExperiencesTimeline } from '@/constants';
import { HeaderSection } from './components';
import { VerticalMilestone } from '@/components';

const Home = () => {
  return (
    <>
      <HeaderSection />

      <VerticalMilestone milestones={ExperiencesTimeline} />
    </>
  );
};

export default Home;
