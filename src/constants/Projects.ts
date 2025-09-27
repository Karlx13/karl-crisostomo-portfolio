import type { IProjectTableProps } from '@/components/ProjectTable/ProjectTable.types';

export const PROJECT_DETAILS: IProjectTableProps['projectDetails'] = [
  {
    id: 1,
    projectName: 'World of Minifigs - Minifig Builder',
    client: 'Bricks Extreme LLC',
    techstack: ['React + Vite', 'tailwindCss', 'Typescript'],
    year: 2025,
    projectContent: {
      description: 'world of shit description',
      link: '/',
      images: [],
    },
  },
  {
    id: 2,
    projectName: 'Karl Crisostomo Porfolio V2',
    client: '',
    techstack: ['React + Vite', 'tailwindCss', 'Typescript'],
    year: 2025,
    projectContent: {
      description: 'portfolio description',
      link: '/',
      images: [],
    },
  },
];
