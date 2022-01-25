import React, { useState, useCallback, useMemo } from 'react';
import { SearchBarProps } from './SearchBar.type';
import { SearchSuggestions, SvgIcon } from '@/components';
import {
  StyledSearchForm,
  StyledSearchButton,
  StyledFormInput,
} from './SearchBar.styled';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from 'react-use/lib';

export function SearchBar({ value = '' }: SearchBarProps): JSX.Element {
  const [keyword, setKeyword] = useState(value);
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');

  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setKeyword(value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      // TODO: @channel + keyword
      e.preventDefault();
      navigate('/search/' + keyword);
    },
    [navigate, keyword]
  );

  // debouncedKeyword 가 바뀌면 재랜더링 되기 때문에 isReady 쓸 일이 없음
  const [isReady, cancel] = useDebounce(
    () => setDebouncedKeyword(keyword),
    300,
    [keyword]
  );

  const searchButton = useMemo(() => {
    return (
      <StyledSearchButton aria-label="search">
        <SvgIcon id="search" width="100%" height="100%" fill="#fff" />
      </StyledSearchButton>
    );
  }, []);

  const searchSuggestions = useMemo(
    () => <SearchSuggestions keyword={debouncedKeyword} />,
    [debouncedKeyword]
  );

  return (
    <>
      <StyledSearchForm onSubmit={handleSubmit}>
        {/* TODO: Need placeholder animation */}

        <StyledFormInput
          id="test"
          label="test-label"
          visibleLabel={false}
          value={keyword}
          inputProps={{ onChange: handleChange }}
        >
          @username + tag to search within a verified channel
        </StyledFormInput>
        {searchButton}
      </StyledSearchForm>
      {searchSuggestions}
    </>
  );
}
