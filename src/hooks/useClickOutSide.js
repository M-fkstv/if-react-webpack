import { useEffect, useRef } from 'react';

export const useClickOutside = (close) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (ref.current && !ref.current.contains(event.target) && close) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutSide, true);

    return () => {
      document.removeEventListener('click', handleClickOutSide, true);
    };
  }, [close]);

  return ref;
};
