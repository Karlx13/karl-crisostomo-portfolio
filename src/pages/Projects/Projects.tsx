import { ProjectTable } from '@/components';
import { PROJECT_DETAILS } from '@/constants/Projects';

const Projects = () => {
  return (
    <section className="h-dvh flex items-center w-full px-1">
      <ProjectTable projectDetails={PROJECT_DETAILS} />
    </section>
  );
};

export default Projects;
