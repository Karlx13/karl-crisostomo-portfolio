import { createBrowserRouter } from 'react-router';
import routes from '../router/Routes';

export const createAppRouter = () => {
  return createBrowserRouter(routes);
};
