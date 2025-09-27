import { NavigationBar } from '@/components/NavigationBar';
import { NavLinks } from '@/constants';
import { FooterSection } from '@/containers';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <main className="">
      <div className="fixed z-50 left-0 top-0  py-4 w-full backdrop-blur-3xl flex justify-center">
        <NavigationBar showDot links={NavLinks} />
        {/* <ThemeToggle /> */}
      </div>

      <Outlet />

      <div className="border-1 border-white/30" />

      <FooterSection />
    </main>
  );
};

export default RootLayout;
