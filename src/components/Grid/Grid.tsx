import React, { useCallback } from 'react';
import { useAppSelector } from '@/store';
import { trendingGifsSelector } from '@/store/featrues/giphy/giphy';
import { StyledGridItem, SytledGridContainer } from './Grid.styled';
import { Card } from '@/components';
import { getRandomCount } from '@/utils';

export function Grid() {
  const { isLoading, gifs } = useAppSelector(trendingGifsSelector);

  const createGridInfos = useCallback((gifs) => {
    const gridColumnVariations = ['1111', '211', '121', '112'];

    let count = 0;
    const gifsInfo: string[] = [];

    while (count <= gifs.length) {
      const index = getRandomCount(0, 4);
      if (count + gridColumnVariations[index].length > gifs.length) break;

      count += gridColumnVariations[index].length;
      gifsInfo.push(gridColumnVariations[index]);
    }

    const remainGifsNumber = gifs.length - count;

    const getRemainGifsInfos = (info: string[], number: number) => {
      return info[getRandomCount(0, number)];
    };

    switch (remainGifsNumber) {
      case 1:
        gifsInfo.push(getRemainGifsInfos(['1', '2'], 2));
        break;
      case 2:
        gifsInfo.push(getRemainGifsInfos(['11', '12', '21'], 3));
        break;
      case 3:
        gifsInfo.push(getRemainGifsInfos(['111', '211', '121', '112'], 4));
    }

    return gifsInfo;
  }, []);

  const gridInfos = createGridInfos(gifs).join('').split('');

  return (
    <>
      {!isLoading && (
        <SytledGridContainer className="container">
          {gridInfos.map((width, index) => (
            <StyledGridItem
              data-width={width}
              className="gridItem"
              key={gifs[index].id}
            >
              <Card gridWidth={width} containerType="grid" {...gifs[index]} />
            </StyledGridItem>
          ))}
        </SytledGridContainer>
      )}
    </>
  );
}
