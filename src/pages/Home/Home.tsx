import { NavigationBar } from '@/components/NavigationBar';
import { NavLinks } from '@/constants';
import { HeaderSection } from './components';

const Home = () => {
  return (
    <>
      <NavigationBar showDot links={NavLinks} />

      <HeaderSection />
    </>
  );
};

export default Home;
