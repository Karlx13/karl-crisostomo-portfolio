import { memo } from 'react';
import type { IProjectTableProps } from './ProjectTable.types';
import { StyledText } from '../StyledText';

const ProjectTable = memo<IProjectTableProps>(({ projectDetails }) => {
  return (
    <section className="overflow-x-auto w-full">
      <table className="min-w-full text-sm">
        <thead className="sticky top-0 z-10">
          <tr>
            <th className="text-left font-semibold  border-b">Project</th>
            <th className="text-left font-semibold  border-b">Tools</th>
            <th className="text-left font-semibold  border-b">Client</th>
            <th className="text-left font-semibold  border-b">Year</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {projectDetails.map((project) => (
            <tr key={project.projectName} className=" transition-colors duration-200">
              <td className=" font-medium  whitespace-nowrap text-left">{project.projectName}</td>
              <td className=" text-left">
                <div className="flex flex-wrap gap-2">
                  {project.techstack.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full bg-white/15 capitalize text-xs font-medium"
                    >
                      <StyledText>{tool}</StyledText>
                    </span>
                  ))}
                </div>
              </td>
              <td className="text-left">{project.client}</td>
              <td className="text-left">{project.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
});

ProjectTable.displayName = 'ProjectTable';

export default ProjectTable;
