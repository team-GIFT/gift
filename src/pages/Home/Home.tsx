import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  trendingGifsSelector,
  artistGifsSelector,
  fetchTrendingGifs,
  fetchArtistGifs,
  fetchTrendingClips,
  fetchStoryGifs,
  storyGifsSelector,
} from '@/store/featrues/giphy/giphy';
import { StyledSection } from './Home.styled';
import { Carousel, Clips, Title, Grid } from '@/components';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const offset = useRef<number>(1);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchTrendingGifs());
    dispatch(fetchArtistGifs());
    dispatch(fetchTrendingClips());
    dispatch(fetchStoryGifs(offset.current));
  }, [dispatch]);

  const { gifs } = useAppSelector(storyGifsSelector);
  const { isLoading: isTrendingGifsLoading, gifs: trendingGifs } =
    useAppSelector(trendingGifsSelector);
  const { isLoading: isArtistGifsLoading, gifs: artistGifs } =
    useAppSelector(artistGifsSelector);

  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      offset.current += 1;
      dispatch(fetchStoryGifs(offset.current));
    }
  }, [dispatch, inView]);

  return (
    <>
      <Helmet>
        <title>GIFT - Be Animated</title>
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
            <Grid forwardRef={ref} gifs={gifs} />
          </StyledSection>
        </>
      )}
    </>
  );
}
