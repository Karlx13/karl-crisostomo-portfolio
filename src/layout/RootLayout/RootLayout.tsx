import { NavigationBar } from '@/components/NavigationBar';
import { NavLinks } from '@/constants';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <main>
      <NavigationBar showDot links={NavLinks} />
      <Outlet />
    </main>
  );
};

export default RootLayout;
