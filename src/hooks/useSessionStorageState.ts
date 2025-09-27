import { useEffect, useState } from 'react';

export const useSessionStorageState = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedvalue = sessionStorage.getItem(key);

      return storedvalue ? (JSON.parse(storedvalue) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [key, state]);

  return [state, setState] as const;
};
