import { Minifig_screenshot_1, Minifig_screenshot_2 } from '@/assets/images/minifig';
import { HydroponicsImage1 } from '@/assets/images/hydroponics';
import { Portfolio_screenshot_1, Portfolio_screenshot_2 } from '@/assets/images/portfolio';
import type { IProjectTableProps } from '@/pages/Projects/components/ProjectTable/ProjectTable';

export const PROJECT_DETAILS: IProjectTableProps['projectDetails'] = [
  {
    id: 1,
    projectName: 'World of Minifigs - Minifig Builder',
    client: 'Brick Extreme LLC',
    category: 'Web Development',
    year: 2025,
    projectContent: {
      description: `Developed the front-end of the external LEGO Builder website linked to the company's main e-commerce platform,
        creating a scalable and maintainable architecture consistent with product standards, contributed to the back end with Express.Js for managing
        LEGO model components.`,
      link: 'https://www.worldofminifigs.com',
      images: [
        {
          src: Minifig_screenshot_1,
          alt: 'test1',
        },
        {
          src: Minifig_screenshot_2,
          alt: 'test-2',
        },
      ],
    },
  },
  {
    id: 2,
    projectName: 'Karl Crisostomo Porfolio V2',
    client: 'Personal Project',
    category: 'Web Development',
    year: 2025,
    projectContent: {
      description: `My second portfolio iteration - redesigned and rebuilt from the ground up with a cleaner layout, 
      smoother animations, and more cohesive design system.`,
      link: '/',
      images: [
        {
          src: Portfolio_screenshot_1,
          alt: 'Portfolio_screenshot_1',
        },
        {
          src: Portfolio_screenshot_2,
          alt: 'Portfolio_screenshot_2',
        },
      ],
    },
  },
  {
    id: 3,
    projectName: 'Automated Hydroponics Nutrient Solution Control',
    client: 'Academic Collaboration',
    category: 'IoT & Embedded Systems',
    year: 2023,
    projectContent: {
      description: `Contributed to the development of a smart plant monitoring hardware 
      prototype by programming sensor systems and integrating IoT features. I developed a real-time 
      logging system and mobile connectivity through BlynkApp to track pH, water level, and TDS remotely.`,
      link: '',
      images: [
        {
          src: HydroponicsImage1,
          alt: 'Hydroponics_Image_1',
        },
      ],
    },
  },
];
