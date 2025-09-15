import { memo } from 'react';
import { StyledText } from '../StyledText';
import type { INavbarProps } from './NavigationBar.types';
import { NavLink } from 'react-router';

const NavigationBar = memo<INavbarProps>(({ links, showDot = false }) => (
  <nav className="w-full flex justify-center">
    <ul className="flex items-center justify-center gap-2 border-2  p-2 rounded-full  border-dashed w-fit">
      {links.map((item, idx) => (
        <li key={item.label}>
          <NavLink className="flex gap-1 items-center justify-center" to={item.path}>
            {<StyledText className="text-base sm:text-sm font-semibold" text={item.label} />}

            {showDot && idx < links.length - 1 && <StyledText text="•" />}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
));

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
