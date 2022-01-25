import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TagList, A11yHidden } from '@/components';
import {
  StyledSection,
  StyledTitle,
  StyledResultCount,
  StyledKeyword,
} from './SearchResult.styled';
import { useGetChannelsQuery } from '@/services';

export default function SearchResult() {
  const { keyword } = useParams();
  const { data, isLoading } = useGetChannelsQuery(keyword);
  console.log({ keyword, data, isLoading });

  return (
    <>
      <Helmet>
        <title> {keyword} GIFs on GIFT</title>
      </Helmet>
      <StyledSection>
        <div>
          <StyledKeyword as="h2">{keyword}</StyledKeyword>
          {/* Stickers || GIFs */}
          <StyledResultCount>000 GIFs</StyledResultCount>
        </div>
        <div>
          <A11yHidden as="h3">Related tags</A11yHidden>
          <TagList />
        </div>
      </StyledSection>
      <StyledSection>
        <StyledTitle as="h3">1 channel</StyledTitle>
        {/* channel slides */}
      </StyledSection>
      <StyledSection>
        <StyledTitle as="h3">GIPHY Clips</StyledTitle>
        {/* Clips slides */}
      </StyledSection>
      <StyledSection>
        <StyledTitle as="h3">GIFs</StyledTitle>
        {/* GIFs infinite scroll */}
      </StyledSection>
    </>
  );
}
