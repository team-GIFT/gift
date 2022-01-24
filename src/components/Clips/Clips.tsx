import React from 'react';
import {
  StyledSection,
  StyledWrapper,
  StyledPrimaryCard,
} from './Clips.styled';
import { Card } from '@/components';

import { useAppSelector } from '@/store';
import { trendingClipsSelector } from '@/store/featrues/giphy/giphy';

export function Clips(): JSX.Element {
  const { isLoading, gifs } = useAppSelector(trendingClipsSelector);

  const [primaryGif, ...subGifs] = gifs;

  return (
    <>
      {!isLoading && (
        <StyledSection className="clips">
          <StyledPrimaryCard containerType="clips" {...primaryGif} />
          <StyledWrapper>
            {subGifs.map((gif) => (
              <Card key={gif.id} containerType="clips" {...gif} />
            ))}
          </StyledWrapper>
        </StyledSection>
      )}
    </>
  );
}
