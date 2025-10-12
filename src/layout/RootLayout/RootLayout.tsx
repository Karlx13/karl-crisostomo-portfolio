import { NavigationBar } from '@/components/NavigationBar';
import { NAVLINKS } from '@/constants';
import { FooterSection, LocomotiveScrollProvider } from '@/containers';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <LocomotiveScrollProvider>
      <main>
        <div className="fixed z-50 left-0 top-0  py-4 w-full backdrop-blur-3xl flex justify-center">
          <NavigationBar showDot links={NAVLINKS} />
        </div>

        <Outlet />

        <div className="border-1 border-white/20" />

        <FooterSection />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default RootLayout;
