import { memo, useCallback } from 'react';
import { StyledText } from '../StyledText';
import type { INavbarProps } from './NavigationBar.types';
import { NavLink } from 'react-router';
import { cn } from '@/utils';
import { useSessionStorageState } from '@/hooks/useSessionStorageState';
import { useTheme } from '@/hooks';
import { FluxButton } from '../FluxButton';

const NavigationBar = memo<INavbarProps>(({ links, showDot = false }) => {
  const { theme } = useTheme();
  // const [scrolled, setScrolled] = useState(false);

  const [activeLink, setActiveLink] = useSessionStorageState<string>(
    'activeNavigationLink',
    links[0]?.label,
  );

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleSelectNavLink = useCallback((id: string) => setActiveLink(id), [setActiveLink]);

  return (
    <nav className="w-full flex justify-center  ">
      <ul className={cn(' flex items-center justify-center gap-2 duration-75 w-full')}>
        {links.map((item, idx) => {
          const isActiveLink = activeLink === item.label;

          return (
            <li className="flex items-center justify-center gap-1" key={item.label}>
              <NavLink onClick={() => handleSelectNavLink(item.label)} to={item.path}>
                {
                  <FluxButton
                    className={cn(
                      theme === 'dark' && 'hover:bg-white/10',
                      isActiveLink && 'font-extrabold',
                    )}
                    topLabel={item.label}
                    bottomLabel={item.label}
                  />
                }
              </NavLink>

              {showDot && idx < links.length - 1 && <StyledText>•</StyledText>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
