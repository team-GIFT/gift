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
  StyledNoResult,
} from './SearchResult.styled';
import { useGetChannelsQuery, useGetSearchSuggestionsQuery } from '@/services';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchSearchGifs,
  resetSearchGifs,
  searchGifsSelector,
} from '@/store/featrues/giphy/giphy';
import { useInView } from 'react-intersection-observer';

export default function SearchResult() {
  const { keyword } = useParams();
  const dispatch = useAppDispatch();

  const offset = useRef<number>(0);
  const { gifs, isLoading: gifIsLoading } = useAppSelector(searchGifsSelector);

  const { ref, inView } = useInView({ triggerOnce: true });

  const { data: relatedTags, isFetching: tagsIsFetching } =
    useGetSearchSuggestionsQuery(keyword as string);

  const { data: user, isLoading: channelsIsLoading } = useGetChannelsQuery(
    keyword as string
  );

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

  useEffect(() => {
    offset.current = 0;
    dispatch(resetSearchGifs());
  }, [dispatch, keyword]);

  useLayoutEffect(() => {
    dispatch(
      fetchSearchGifs({
        term: keyword as string,
        num: 25,
        offset: offset.current,
      })
    );
  }, [dispatch, keyword]);

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
      {!tagsIsFetching && (
        <StyledSection>
          <StyledTitleSection>
            <StyledKeyword as="h2">{keyword}</StyledKeyword>
            <StyledResultCount aria-hidden={true}>
              every GIFs in GIFT
            </StyledResultCount>
          </StyledTitleSection>
          <StyledTagList>
            <A11yHidden as="h3">Related tags</A11yHidden>
            {relatedTags?.length ? (
              <TagList
                mode="nomore"
                tags={relatedTags?.map((tag) => tag.name)}
              />
            ) : (
              ''
            )}
          </StyledTagList>
        </StyledSection>
      )}

      {!gifIsLoading && gifs.length === 0 ? (
        <StyledNoResult>
          No GIFs found for <span>{keyword}</span>. Try searching with another
          keyword instead?
        </StyledNoResult>
      ) : (
        <>
          {!channelsIsLoading && $channels?.length ? (
            <StyledSection>
              <StyledTitle as="h3">channels</StyledTitle>
              <StyledChannels>{$channels}</StyledChannels>
            </StyledSection>
          ) : (
            ''
          )}
          <StyledSection>
            <StyledTitle as="h3">GIFs</StyledTitle>
            {!gifIsLoading && gifs.length && (
              <Grid forwardRef={ref} gifs={gifs} />
            )}
          </StyledSection>
        </>
      )}
    </>
  );
}
