import { Minifig_screenshot_1, Minifig_screenshot_2 } from '@/assets/images/minifig';
import { HydroponicsImage1 } from '@/assets/images/hydroponics';
import { Portfolio_screenshot_1, Portfolio_screenshot_2 } from '@/assets/images/portfolio';
import type { IProjectTableProps } from '@/pages/Projects/components/ProjectTable/ProjectTable';
import {
  workstream_screenshot_1,
  workstream_screenshot_2,
  workstream_screenshot_3,
} from '@/assets/images/workstream';

export const PROJECT_DETAILS: IProjectTableProps['projectDetails'] = [
  {
    id: 1,
    projectName: 'Workstream Billing System',
    client: 'Workstream PH',
    category: 'Web Development, Accounting Software',
    year: 2026,
    projectContent: {
      description: `Designed and developed a billing system for BPO operations, replacing complex spreadsheet-based workflows with automated employee salary calculations, client billing, financial adjustments, and reporting. Built the core billing logic to handle real-world scenarios including employee reallocations, resignations, overtime, leave, and retroactive salary adjustments, with a focus on calculation accuracy, data consistency, and maintainability.`,
      link: 'https://billing.workstreamph.com/client-billing',
      images: [
        {
          src: workstream_screenshot_1,
          alt: 'Workstream Billing System - Client Billing',
        },
        {
          src: workstream_screenshot_2,
          alt: 'Workstream Billing System - Salary Calculations',
        },
        {
          src: workstream_screenshot_3,
          alt: 'Workstream Billing System - Financial Reporting',
        },
      ],
    },
  },
  {
    id: 2,
    projectName: 'World of Minifigs - Minifig Builder',
    client: 'Brick Extreme LLC',
    category: 'Web Development, E-commerce',
    year: 2025,
    projectContent: {
      description: `Developed an interactive LEGO minifigure builder integrated with an existing e-commerce platform, allowing customers to customize their own minifigures through a dynamic web interface. Built reusable frontend components and contributed to Express.js backend functionality for managing LEGO parts and customization options, focusing on responsiveness, maintainability, and a smooth user experience.`,
      link: 'https://www.worldofminifigs.com',
      images: [
        {
          src: Minifig_screenshot_1,
          alt: 'World of Minifigs - Builder Interface',
        },
        {
          src: Minifig_screenshot_2,
          alt: 'World of Minifigs - Customization Options',
        },
      ],
    },
  },
  {
    id: 3,
    projectName: 'Karl Crisostomo Portfolio V2',
    client: 'Personal Project',
    category: 'Frontend Development, UI/UX',
    year: 2025,
    projectContent: {
      description: `Redesigned and rebuilt my personal portfolio from the ground up to create a more polished and interactive experience. Focused on responsive layouts, smooth animations, reusable components, and a consistent design system while keeping the codebase clean and maintainable.`,
      link: '/',
      images: [
        {
          src: Portfolio_screenshot_1,
          alt: 'Portfolio V2 - Homepage',
        },
        {
          src: Portfolio_screenshot_2,
          alt: 'Portfolio V2 - Projects',
        },
      ],
    },
  },
  {
    id: 4,
    projectName: 'Automated Hydroponics Nutrient Solution Control',
    client: 'Academic Collaboration',
    category: 'IoT, Embedded Systems',
    year: 2023,
    projectContent: {
      description: `Developed key software components for an IoT-based hydroponics monitoring prototype, integrating sensors and real-time data logging to monitor pH levels, water levels, and nutrient concentration (TDS). Implemented remote monitoring through Blynk, enabling users to track system conditions from a mobile device and reducing the need for constant manual checks.`,
      link: '',
      images: [
        {
          src: HydroponicsImage1,
          alt: 'Automated Hydroponics - IoT Monitoring Prototype',
        },
      ],
    },
  },
];
