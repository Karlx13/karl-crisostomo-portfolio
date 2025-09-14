import type { RouteObject } from 'react-router';
import { RootLayout } from '../layout';
import { About, ErrorPage, Experiences, Home, Projects } from '@/pages';
import { Skills } from '@/pages/Skills';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/experiences', element: <Experiences /> },
      { path: '/projects', element: <Projects /> },
      { path: '/skills', element: <Skills /> },
    ],
  },
];

export default routes;
