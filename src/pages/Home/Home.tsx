import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {
  trendingGifsSelector,
  artistGifsSelector,
  fetchTrendingGifs,
  fetchArtistGifs,
  fetchTrendingClips,
} from '@/store/featrues/giphy/giphy';
import { StyledSection } from './Home.styled';

import { Title, Carousel, Clips, Grid } from '@/components';

export default function Home() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchTrendingGifs());
    dispatch(fetchArtistGifs());
    dispatch(fetchTrendingClips());
  }, [dispatch]);

  const { isLoading: isTrendingGifsLoading, cards: trendingGifs } =
    useSelector(trendingGifsSelector);
  const { isLoading: isArtistGifsLoading, cards: artistGifs } =
    useSelector(artistGifsSelector);

  return (
    <>
      <Helmet>
        <title>GIFT-Home</title>
      </Helmet>
      {!isTrendingGifsLoading && !isArtistGifsLoading && (
        <>
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
        </>
      )}
    </>
  );
}
