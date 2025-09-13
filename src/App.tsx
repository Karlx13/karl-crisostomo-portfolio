import { RouterProvider } from 'react-router';
import './App.css';
import { createAppRouter } from './utils';

function App() {
  const router = createAppRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
