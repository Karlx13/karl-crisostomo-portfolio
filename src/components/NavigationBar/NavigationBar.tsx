import { memo, useCallback, useEffect, useState } from 'react';
import { StyledText } from '../StyledText';
import type { INavbarProps } from './NavigationBar.types';
import { NavLink } from 'react-router';
import { cn } from '@/utils';
import { useSessionStorageState } from '@/hooks/useSessionStorageState';
import { useTheme } from '@/hooks';

const NavigationBar = memo<INavbarProps>(({ links, showDot = false }) => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const [activeLink, setActiveLink] = useSessionStorageState<string>(
    'activeNavigationLink',
    links[0]?.label,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectNavLink = useCallback((id: string) => setActiveLink(id), [setActiveLink]);

  return (
    <nav className="w-full flex justify-center z-[9999]">
    <ul className={cn(" fixed flex top-10 items-center justify-center gap-2 border-2 duration-75 p-2 rounded-full  border-dashed w-fit", scrolled && 'bg-black/20 backdrop-blur-xl', )}>
        {links.map((item, idx) => {
          const isActiveLink = activeLink === item.label;

          return (
            <li key={item.label}>
              <NavLink
                onClick={() => handleSelectNavLink(item.label)}
                className="flex gap-1 items-center justify-center"
                to={item.path}
              >
                {
                  <StyledText
                    className={cn(
                      'text-base sm:text-sm hover:bg-black/10 p-1 rounded-md',
                      theme === 'dark' && 'hover:bg-white/10',
                      isActiveLink && 'font-extrabold',
                    )}
                  >
                    {item.label}
                  </StyledText>
                }

                {showDot && idx < links.length - 1 && <StyledText>•</StyledText>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
