import { useTheme } from '@/hooks';
import { memo, useCallback, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const toggletheme = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <button
      className="fixed top-10 right-10 cursor-pointer border-2 px-4 rounded-full"
      onClick={toggletheme}
      type="button"
    >
      {theme === 'light' ? 'light' : 'dark mode'}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
