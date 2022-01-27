import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { SearchBarProps } from './SearchBar.type';
import { SearchSuggestions, SvgIcon } from '@/components';
import {
  StyledSearchWrapper,
  StyledSearchForm,
  StyledSearchButton,
  StyledFormInput,
} from './SearchBar.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDebounce } from 'react-use/lib';

export function SearchBar({ value = '' }: SearchBarProps): JSX.Element {
  const [actualKeyword, setActualKeyword] = useState(value);
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const { keyword: paramKeyword } = useParams();
  const navigate = useNavigate();
  useDebounce(() => setDebouncedKeyword(actualKeyword), 300, [actualKeyword]);

  // 새로운 검색어로 페이지가 만들어지면 연관 검색어창을 닫아준다.
  useEffect(() => {
    setIsOpen(false);
  }, [paramKeyword]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setActualKeyword(value);
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
      navigate('/search/' + actualKeyword);
    },
    [navigate, actualKeyword]
  );

  // SearchSuggestions 컴퍼넌트의 이벤트 동작이 클래스로 가능하기 때문에 필수 타입으로 지정
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement, Element>) => {
      if (!e.relatedTarget?.closest('.search-wrapper')) setIsOpen(false);
      if (e.relatedTarget?.closest('.search-suggestions-wrapper')) {
        const relatedKeyword = e.relatedTarget?.textContent || '';
        setActualKeyword(relatedKeyword);
        relatedKeyword === paramKeyword && setIsOpen(false);
      }
    },
    [paramKeyword]
  );

  const searchButton = useMemo(() => {
    return (
      <StyledSearchButton aria-label="search">
        <SvgIcon id="search" width="100%" height="100%" fill="#fff" />
      </StyledSearchButton>
    );
  }, []);

  return (
    <StyledSearchWrapper className="search-wrapper" onBlur={handleBlur}>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledFormInput
          id="test"
          label="test-label"
          visibleLabel={false}
          value={actualKeyword}
          inputProps={{
            onChange: handleChange,
          }}
        >
          Search all the GIFs in GIFT
        </StyledFormInput>
        {searchButton}
      </StyledSearchForm>
      <SearchSuggestions
        keyword={debouncedKeyword}
        $isOpen={isOpen}
        className="search-suggestions-wrapper"
      />
    </StyledSearchWrapper>
  );
}
