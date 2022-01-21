import React, { useCallback } from 'react';
import { StyledGridItem, SytledGridContainer } from './Grid.styled';
import { Card } from '@/components';
import { getRandomCount } from '@/utils';

export function Grid() {
  const card = {
    title: 'hihi',
    url: 'https://giphy.com/gifs/studiosoriginals-TmhCoUsBQrzWrcsqAd',
    preview: {
      height: 228,
      mp4: 'https://media2.giphy.com/media/TmhCoUsBQrzWrcsqAd/giphy-preview.mp4?cid=cba2429cg7wsgc2opasvqed5sf3rge2u3o45dpf2d2zmldey&rid=giphy-preview.mp4&ct=g',
      mp4_size: '38984',
      width: 304,
    },
    containerType: 'clips',
  };

  const createGridInfos = useCallback(() => {
    const gridColumnVariations = ['1111', '211', '121', '112'];

    const gifs = Array.from({ length: 25 }, (_, i) => i + 1); // redux data

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

  const gridInfos = createGridInfos();

  return (
    <SytledGridContainer className="container">
      {gridInfos.map((item, i) => (
        <React.Fragment key={i}>
          {Array.from({ length: item.length }, (_, index) => (
            <StyledGridItem
              data-width={item[index]}
              className="gridItem"
              key={'0' + index}
            >
              <Card {...card} />
            </StyledGridItem>
          ))}
        </React.Fragment>
      ))}
    </SytledGridContainer>
  );
}
