import React, { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  trendingGifsSelector,
  artistGifsSelector,
  fetchTrendingGifs,
  fetchArtistGifs,
  fetchTrendingClips,
} from '@/store/featrues/giphy/giphy';
import { StyledSection } from './Home.styled';

import { Header, Wrapper, Title, Carousel, Clips, Grid } from '@/components';

export default function Home() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchTrendingGifs());
    dispatch(fetchArtistGifs());
    dispatch(fetchTrendingClips());
  }, [dispatch]);

  const { isLoading: isTrendingGifsLoading, gifs: trendingGifs } =
    useAppSelector(trendingGifsSelector);
  const { isLoading: isArtistGifsLoading, gifs: artistGifs } =
    useAppSelector(artistGifsSelector);

  return (
    <>
      {!isTrendingGifsLoading && !isArtistGifsLoading && (
        <Wrapper>
          <StyledSection>
            <Title title="Trending" as="h2" />
            <Carousel height={140} cards={trendingGifs} />
          </StyledSection>
          <StyledSection>
            <Title title="Artists" as="h2" iconType="artists" />
            <Carousel height={270} cards={artistGifs} />
          </StyledSection>
          <StyledSection>
            <Title title="Clips" as="h2" iconType="clips" />
            <Clips />
          </StyledSection>
          <StyledSection>
            <Title title="Stories" as="h2" iconType="stories" />
            <Grid />
          </StyledSection>
        </Wrapper>
      )}
    </>
  );
}
