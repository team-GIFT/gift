import { useLayoutEffect, useState, useCallback } from 'react';
import { getRandomCount } from '@/utils';
import { CardProps } from '@/components/Card/Card.types';

export const useGrid = (gifs: CardProps[]) => {
  const [gridInfos, setGridInfos] = useState<string[]>([]);

  const gridLayoutInfos = gridInfos.join('').split('');

  useLayoutEffect(() => {
    setGridInfos((prevGridInfos) => {
      const gridColumnVariations = ['1111', '211', '121', '112'];

      const getGifsInfosToAdd = (info: string[]) => {
        return info[getRandomCount(0, info[0].length + 1)];
      };

      let count = prevGridInfos.join('').split('').length;

      const gifsInfo: string[] = prevGridInfos.length ? [...prevGridInfos] : [];

      if (gifsInfo.length) {
        const lastGifsInfo = gifsInfo[gifsInfo.length - 1];

        const sumOfTheRemainingWidths =
          4 - lastGifsInfo.split('').reduce((acc, cur) => acc + +cur, 0);

        switch (sumOfTheRemainingWidths) {
          case 1:
            gifsInfo[gifsInfo.length - 1] += '1';
            count += 1;
            break;
          case 2:
            gifsInfo[gifsInfo.length - 1] += '11';
            count += 2;
            break;
          case 3:
            gifsInfo[gifsInfo.length - 1] += getGifsInfosToAdd([
              '12',
              '21',
              '111',
            ]);
            count += gifsInfo[gifsInfo.length - 1].length - 1;
        }
      }

      while (count <= gifs.length) {
        const number = getRandomCount(0, 4);
        if (count + gridColumnVariations[number].length > gifs.length) break;
        count += gridColumnVariations[number].length;
        gifsInfo.push(gridColumnVariations[number]);
      }

      const remainGifsNumber = gifs.length - count;

      switch (remainGifsNumber) {
        case 1:
          gifsInfo.push(getGifsInfosToAdd(['1', '2']));
          break;
        case 2:
          gifsInfo.push(getGifsInfosToAdd(['11', '12', '21']));
          break;
        case 3:
          gifsInfo.push(getGifsInfosToAdd(['111', '211', '121', '112']));
      }

      return gifsInfo;
    });
  }, [gifs.length]);

  return gridLayoutInfos;
};
