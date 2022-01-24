import { useState, useEffect } from 'react';

interface debounceProps {
  value: string;
  delay: number;
}

export function useDebounce({ value, delay }: debounceProps): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
