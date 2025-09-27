import { NavigationBar } from '@/components/NavigationBar';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { NavLinks } from '@/constants';
import { FooterSection } from '@/containers';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <main className="relative">
      <NavigationBar showDot links={NavLinks} />
      <ThemeToggle />

      <Outlet />

      <div  className='border-1 border-gray-800'/>

      <FooterSection />
    </main>
  );
};

export default RootLayout;
