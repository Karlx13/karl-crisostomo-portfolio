import { RouterProvider } from 'react-router';
import './App.css';
import { createAppRouter } from './utils';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const router = createAppRouter();
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
