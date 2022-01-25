import React, { useState, useCallback, useMemo } from 'react';
import { SearchBarProps } from './SearchBar.type';
import { SearchSuggestions, SvgIcon } from '@/components';
import {
  StyledSearchWrapper,
  StyledSearchForm,
  StyledSearchButton,
  StyledFormInput,
} from './SearchBar.styled';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from 'react-use/lib';

export function SearchBar({ value = '' }: SearchBarProps): JSX.Element {
  const [keyword, setKeyword] = useState(value);
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setKeyword(value);
      if (!isOpen && value !== '') setIsOpen(true);
      if (value === '') setIsOpen(false);
    },
    [isOpen]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // TODO: @channel + keyword
      e.preventDefault();
      setIsOpen(false);
      navigate('/search/' + keyword);
    },
    [navigate, keyword]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement, Element>) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    },
    []
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

  // debouncedKeyword 가 바뀌면 재랜더링 되기 때문에 isReady 쓸 일이 없음
  // useCallback 안해줘도 되는지? 기준
  const [isReady, cancel] = useDebounce(
    () => setDebouncedKeyword(keyword),
    300,
    [keyword]
  );

  return (
    <StyledSearchWrapper>
      <StyledSearchForm onSubmit={handleSubmit}>
        {/* TODO: Need placeholder animation */}

        <StyledFormInput
          id="test"
          label="test-label"
          visibleLabel={false}
          value={keyword}
          inputProps={{
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        >
          @username + tag to search within a verified channel
        </StyledFormInput>
        {searchButton}
      </StyledSearchForm>
      {isOpen && searchSuggestions}
    </StyledSearchWrapper>
  );
}
