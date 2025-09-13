import type { RouteObject } from 'react-router';
import { RootLayout } from '../layout';
import { Home } from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
