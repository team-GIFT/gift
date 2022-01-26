import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TagList, A11yHidden, Grid, ChannelInfo } from '@/components';
import {
  StyledSection,
  StyledTitle,
  StyledTagList,
  StyledResultCount,
  StyledKeyword,
  StyledChannels,
  StyledTitleSection,
} from './SearchResult.styled';
import { useGetChannelsQuery } from '@/services';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchSearchGifs,
  searchGifsSelector,
} from '@/store/featrues/giphy/giphy';
import { useInView } from 'react-intersection-observer';

export default function SearchResult() {
  const { keyword } = useParams();
  const { data: user } = useGetChannelsQuery(keyword as string);
  const dispatch = useAppDispatch();

  const $channels = user?.map(
    ({ avatar_url, display_name, username, profile_url, is_verified }, idx) => (
      <ChannelInfo
        key={idx}
        imgUrl={avatar_url}
        userName={display_name}
        channelName={username}
        channelLink={profile_url}
        verified={is_verified}
        textOverflow="initial"
        whiteSpace="initial"
        overflow="initial"
      />
    )
  );

  const offset = useRef<number>(0);

  useLayoutEffect(() => {
    dispatch(
      fetchSearchGifs({
        term: keyword as string,
        num: 25,
        offset: offset.current,
      })
    );
  }, [dispatch, keyword]);

  const { gifs } = useAppSelector(searchGifsSelector);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      offset.current += 1;
      dispatch(
        fetchSearchGifs({
          term: keyword as string,
          num: 25,
          offset: offset.current,
        })
      );
    }
  }, [dispatch, inView, keyword]);

  return (
    <>
      <Helmet>
        <title> {keyword} GIFs on GIFT</title>
      </Helmet>
      <StyledSection>
        <StyledTitleSection>
          <StyledKeyword as="h2">{keyword}</StyledKeyword>
          {/* Stickers || GIFs */}
          <StyledResultCount>000 GIFs</StyledResultCount>
        </StyledTitleSection>
        <StyledTagList>
          <A11yHidden as="h3">Related tags</A11yHidden>
          <TagList tags={['hello', 'hi']} />
        </StyledTagList>
      </StyledSection>
      <StyledSection>
        <StyledTitle as="h3">channels</StyledTitle>
        {/* channel slides */}
        <StyledChannels>{$channels}</StyledChannels>
      </StyledSection>
      <StyledSection>
        <StyledTitle as="h3">GIFs</StyledTitle>
        {/* GIFs infinite scroll */}
        <Grid forwardRef={ref} gifs={gifs} />
      </StyledSection>
    </>
  );
}
