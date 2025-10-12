export interface IProjectContent {
  images: {
    src: string;
    alt: string;
  }[];
  link: string;
  description: string;
}

export interface IProjectDetails {
  id: number;
  projectName: string;
  client: string;
  category: string;
  year: number;
  projectContent?: IProjectContent;
}
