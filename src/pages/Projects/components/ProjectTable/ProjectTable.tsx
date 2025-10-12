import { GeneralTable } from '@/components/Generaltable';
import type { IColumn } from '@/components/Generaltable/GeneralTable.types';
import { memo, useEffect } from 'react';
import type { IProjectDetails } from './ProjectTable.types';
import { GeneralTableContent } from '@/components/GeneralTableContent';

export interface IProjectTableProps {
  projectDetails: IProjectDetails[];
}

const ProjectTable = memo<IProjectTableProps>(({ projectDetails }) => {
  const columns: IColumn<IProjectDetails>[] = [
    {
      key: 'name',
      header: 'Project',
      accessor: 'projectName',
    },
    {
      key: 'category',
      header: 'category',
      accessor: 'category',
    },
    { key: 'client', header: 'Client', accessor: 'client' },
    { key: 'year', header: 'Year', accessor: 'year' },
  ];

  useEffect(() => {
    projectDetails.forEach((project) => {
      project.projectContent?.images?.forEach((img) => {
        const image = new Image();
        image.src = img.src;
      });
    });
  }, [projectDetails]);

  return (
    <GeneralTable
      columns={columns}
      data={projectDetails}
      expandableRow={(project) => <GeneralTableContent projectContent={project.projectContent} />}
    />
  );
});

ProjectTable.displayName = 'ProjectTable';

export default ProjectTable;
