import { useTheme } from '@/hooks';
import { memo, useCallback, useEffect } from 'react';
import { FluxButton } from '../FluxButton';

export type ThemeMode = 'light' | 'dark' | 'system';

const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  const topLabel = theme === 'light' ? 'Light' : 'Dark';
  const bottomLabel = theme === 'light' ? 'Dark' : 'Light';

  return (
    <div className="absolute border sm:border-0 rounded-full px-2 max-[600px]:top-20 right-5 backdrop-blur-3xl z-50">
      <FluxButton onClick={toggleTheme} topLabel={topLabel} bottomLabel={bottomLabel} />
    </div>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
