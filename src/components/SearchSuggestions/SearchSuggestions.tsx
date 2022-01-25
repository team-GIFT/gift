import React from 'react';
import { useGetSearchSuggestionsQuery } from '@/services';
import { Link } from 'react-router-dom';
import { StyledSuggestionsWrapper } from './SearchSuggestions.styled';

function Suggestion({ word }: { word: string }) {
  const link = '/search/' + word;
  return <Link to={link}>{word}</Link>;
}

export function SearchSuggestions({ keyword }: { keyword: string }) {
  // suggestions를 상태로 관리하면 Too many re-renders 에러 발생
  // const [suggestions, setSuggestions] = useState([]);
  let suggestions: string[] = [];

  // debounce 된 키워드가 새로 들어오면 검색을 시작
  const { data, isLoading } = useGetSearchSuggestionsQuery(keyword);
  // 로딩이 끝나면 받아올 data
  !isLoading && console.log('suggestions', data?.data);
  // 리스트 랜더링을 위한 배열
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
