import { useInView, type UseInViewOptions } from 'motion/react';
import { useRef } from 'react';

interface useAnimationViewParams {
  options?: UseInViewOptions;
}

export const useAnimationView = ({ options }: useAnimationViewParams) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    ...options,
  });

  return { ref, inView };
};
