import React from 'react';
import { SearchSuggestionsProps } from './SearchSuggestions.types';
import { useGetAutoCompleteQuery } from '@/services';
import { Link } from 'react-router-dom';
import { StyledSuggestionsWrapper } from './SearchSuggestions.styled';

function Suggestion({ word }: { word: string }) {
  const link = '/search/' + word;
  return <Link to={link}>{word}</Link>;
}

export function SearchSuggestions({ keyword }: SearchSuggestionsProps) {
  let suggestions: string[] = [];

  // debounce 된 키워드가 새로 들어오면 검색을 시작
  const { data, isLoading } = useGetAutoCompleteQuery(keyword);

  // 로딩이 끝나면 받아올 data
  // !isLoading && console.log('suggestions', data?.data);

  // 로딩이 끝나면 필요한 값(연관 검색어)를 suggestions 배열에 담는다
  if (!isLoading)
    suggestions = data?.data.map((element: { name: string }) => element.name);

  return isLoading ? (
    <></>
  ) : (
    <StyledSuggestionsWrapper>
      {suggestions?.map((suggestion) => (
        <Suggestion key={suggestion} word={suggestion} />
      ))}
    </StyledSuggestionsWrapper>
  );
}
