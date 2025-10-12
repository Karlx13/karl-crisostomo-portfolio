import { PROJECT_DETAILS } from '@/constants/Projects';
import { ProjectTable } from './components';
import { SectionWrapper } from '@/containers';

const Projects = () => {
  return (
    <SectionWrapper>
      <ProjectTable projectDetails={PROJECT_DETAILS} />
    </SectionWrapper>
  );
};

export default Projects;
