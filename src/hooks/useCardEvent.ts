import { useCallback, useState } from 'react';

export const useCardEvent = (containerType: string | undefined) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleIsHovered = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false);
    },
    []
  );

  const handleIsFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement, Element>) => {
      const { type, relatedTarget, target } = e;

      const isOutOfRange =
        containerType === 'clips' &&
        (target.closest('.channel') || relatedTarget?.closest('.channel'));

      if (isOutOfRange) {
        setIsFocus(false);
        return;
      }

      type === 'blur' && !relatedTarget?.closest('.card')
        ? setIsFocus(false)
        : setIsFocus(true);
    },
    [containerType]
  );

  return { isHovered, handleIsHovered, isFocus, handleIsFocus };
};
