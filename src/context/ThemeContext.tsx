import type { ThemeMode } from '@/components/ThemeToggle/ThemeToggle';
import { useSessionStorageState } from '@/hooks/useSessionStorageState';
import { createContext } from 'react';

export interface IThemeContextParams {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

const ThemeContext = createContext<IThemeContextParams | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useSessionStorageState<ThemeMode>('theme', 'light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
