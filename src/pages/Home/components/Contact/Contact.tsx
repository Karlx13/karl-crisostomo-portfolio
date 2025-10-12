import { AnimatedText, StyledText } from '@/components';
import { memo } from 'react';
import { motion, type Variants } from 'motion/react';
import { ProgressBarAnimation } from '@/animation';
import { MoveUpRight } from 'lucide-react';

const EnterProgressbarAnimation: Variants = {
  rest: { width: '0%', x: '-100%' },
  hover: {
    width: '100%',
    x: '0%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const ExitProgressBarAnimation: Variants = {
  rest: { width: '100%', x: '0%' },
  hover: {
    width: '0%',
    x: '100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export interface IContact {
  contactNo: string;
  email: string;
  links: {
    label: string;
    link: string;
  }[];
}

interface IContactProps {
  data: IContact;
}

const Contact = memo<IContactProps>(({ data }) => (
  <>
    <AnimatedText className="uppercase text-left text-3xl md:text-4xl xl:text-6xl mb-24 font-bold">
      Contact
    </AnimatedText>

    <div className="mb-4 flex flex-col justify-center items-center">
      <div>
        <motion.div initial="rest" whileHover="hover" whileTap="active" animate="rest">
          <StyledText
            as="a"
            href={`tel:${data.contactNo}`}
            className="font-bold min-[200px]:text-xl md:text-2xl tracking-tighter"
          >
            {data.contactNo}
          </StyledText>

          <motion.div className="h-[2px] bg-white" variants={ProgressBarAnimation} />
        </motion.div>
      </div>

      <motion.div initial="rest" whileHover="hover" whileTap="active" animate="rest">
        <StyledText
          as="a"
          href={`mailto:${data.email}`}
          className="font-bold min-[200px]:text-xl md:text-2xl"
        >
          {data.email}
        </StyledText>

        <motion.div className="h-[2px] bg-white" variants={ProgressBarAnimation} />
      </motion.div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-4">
      {data.links.map((item) => (
        <motion.div
          className="flex flex-col"
          key={item.label}
          initial="rest"
          whileHover="hover"
          whileTap="active"
          animate="rest"
        >
          <div
            key={item.label}
            className="flex gap-3 group cursor-pointer relative items-center justify-center "
          >
            <StyledText
              as="a"
              href={item.link}
              target="_blank"
              className=" uppercase font-bold text-xl md:text-lg"
              rel="noopener noreferrer"
            >
              {item.label}
            </StyledText>
            <MoveUpRight
              strokeWidth={2}
              className=" border border-transparent group-active:rotate-45 rotate-12 group-hover:rotate-45 transition-all duration-200"
            />
          </div>
          <div className="relative h-[2px] w-full overflow-hidden">
            {/* Exiting bar (visible first, moves right) */}
            <motion.div
              className="absolute min-[0px]:hidden sm:block top-0 right-0 h-full bg-white"
              variants={ExitProgressBarAnimation}
            />

            {/* Entering bar (hidden first, moves left to right) */}
            <motion.div
              className="absolute min-[0px]:hidden sm:block top-0 left-0 h-full bg-white"
              variants={EnterProgressbarAnimation}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </>
));

Contact.displayName = 'Contact';

export default Contact;
