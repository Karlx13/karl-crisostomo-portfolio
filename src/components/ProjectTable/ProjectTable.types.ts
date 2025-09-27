interface IProjectContent {
  images: string[];
  link: string;
  description: string;
}

interface IProjectDetails {
  id: number;
  projectName: string;
  client: string;
  techstack: string[];
  year: number;
  projectContent?: IProjectContent;
}

export interface IProjectTableProps {
  projectDetails: IProjectDetails[];
}
