import { useCallback, useState } from 'react';

export const useCardEvent = () => {
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

      const [targetId, relatedTargetId] = [target, relatedTarget].map(
        (eventTarget) =>
          (eventTarget?.closest('.card') as HTMLDivElement)?.dataset.id
      );

      type === 'blur' && targetId !== relatedTargetId
        ? setIsFocus(false)
        : setIsFocus(true);
    },
    []
  );

  return { isHovered, handleIsHovered, isFocus, handleIsFocus };
};
