import React from 'react';
import { StyledGridItem, SytledGridContainer } from './Grid.styled';
import { GridProps } from './Grid.types';
import { Card } from '@/components';
import { useGrid } from '@/hooks';

export function Grid({ gifs, forwardRef }: GridProps) {
  const gridLayoutInfos = useGrid(gifs);

  return (
    <SytledGridContainer className="container">
      {gridLayoutInfos.map((width, index) => (
        <StyledGridItem
          key={index}
          ref={index === gridLayoutInfos.length - 1 ? forwardRef : null}
          className="gridItem"
          data-width={width}
        >
          <Card gridWidth={width} containerType="grid" {...gifs[index]} />
        </StyledGridItem>
      ))}
    </SytledGridContainer>
  );
}
