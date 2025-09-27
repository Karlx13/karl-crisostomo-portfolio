import { StyledText } from '@/components';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className='flex flex-col justify-center items-center mt-4'>
        <StyledText className="font-semibold text-center">
          &copy; {currentYear} Karl Crisostomo. All rights reserved.
        </StyledText>
    </section>
  );
};

export default FooterSection;
