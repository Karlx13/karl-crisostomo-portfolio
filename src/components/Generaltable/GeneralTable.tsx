import { memo, useState, type ReactNode } from 'react';
import type { IGeneralTableProps } from './GeneralTable.types';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/utils';
import { StyledText } from '../StyledText';
import {
  bgVariants,
  columnAnimation,
  rowBorderBottomAnimation,
  rowContentAnimation,
  rowVariants,
} from '@/animation';

const GeneralTable = <T extends { id: number | string }>({
  columns,
  data,
  expandableRow,
}: IGeneralTableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<number | string | null>(null);

  const handleRowClick = (id: number | string) => {
    setSelectedRow((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full">
      <div className="uppercase text-xs flex justify-between  text-white/50 font-light">
        {columns.map((col, idx) => (
          <motion.span
            variants={columnAnimation}
            initial="initial"
            animate="enter"
            custom={idx}
            key={col.key}
            className={cn(
              'flex w-full font-light pb-1',
              (idx === 1 || idx === 2) && 'hidden lg:flex',
              idx === 3 && 'w-fit',
            )}
          >
            {col.header}
          </motion.span>
        ))}
      </div>

      <div className="w-full">
        {data.map((row, idx) => {
          return (
            <>
              <motion.div className="flex flex-col justify-between items-center relative">
                <motion.div
                  variants={rowBorderBottomAnimation}
                  initial="initial"
                  animate="enter"
                  className=" absolute bottom-0 right-0 h-px bg-white origin-left"
                />
                <motion.div
                  key={idx}
                  className="flex justify-between w-full relative py-2 cursor-pointer"
                  onClick={() => handleRowClick(idx)}
                  initial={'defaultRest'}
                  whileHover={'popHover'}
                  animate={'defaultRest'}
                  variants={rowVariants}
                >
                  <motion.div
                    variants={bgVariants}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0 z-0"
                  />
                  {columns.map((col, idx) => {
                    return (
                      <motion.div
                        key={idx}
                        custom={idx}
                        variants={rowContentAnimation}
                        initial="initial"
                        animate="enter"
                        className={cn(
                          ' w-full text-left relative',
                          idx === 3 && ' text-right w-fit',
                          (idx === 1 || idx === 2) && 'hidden lg:block',
                        )}
                      >
                        <StyledText
                          variants={rowVariants}
                          className={cn(
                            'relative z-10 font-bold ',
                            col.accessor === 'projectName' && 'max-w-[230px] sm:max-w-sm',
                          )}
                        >
                          {col.render
                            ? col.render(row)
                            : (row[col.accessor as keyof T] as ReactNode)}
                        </StyledText>
                      </motion.div>
                    );
                  })}
                </motion.div>

                <AnimatePresence initial={false}>
                  {selectedRow === idx && (
                    <motion.div
                      key={`expandable-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      className=" w-full overflow-hidden"
                    >
                      {expandableRow(row)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </>
          );
        })}
      </div>
    </section>
  );
};

GeneralTable.displayName = 'GeneralTable';

export default memo(GeneralTable) as typeof GeneralTable;
