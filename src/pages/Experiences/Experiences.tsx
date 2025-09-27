import VerticalMileStone from '@/components/VerticalMilestone/VerticalMilestone';
import { ExperiencesTimeline } from '@/constants';
import { SectionWrapper } from '@/containers/SectionWrapper';

const Experiences = () => {
  return (
    <SectionWrapper>
      <VerticalMileStone milestones={ExperiencesTimeline} />
    </SectionWrapper>
  );
};

export default Experiences;
