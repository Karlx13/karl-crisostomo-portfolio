import VerticalMileStone from '@/components/VerticalMilestone/VerticalMilestone';
import { EXPERIENCES_TIMELINE } from '@/constants';
import { SectionWrapper } from '@/containers/SectionWrapper';

const Experiences = () => {
  return (
    <SectionWrapper className="h-svh">
      <VerticalMileStone milestones={EXPERIENCES_TIMELINE} />
    </SectionWrapper>
  );
};

export default Experiences;
