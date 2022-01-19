import React, { useState, useCallback, useMemo } from 'react';
import { SvgIcon } from '@/components';
import {
  StyledSearchForm,
  StyledSearchButton,
  StyledFormInput,
} from './SearchBar.styled';

export function SearchBar(): JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(value, '검색 통신 예정');
    },
    [value]
  );

  const searchButton = useMemo(() => {
    return (
      <StyledSearchButton aria-label="search">
        <SvgIcon id="search" width="100%" height="100%" fill="#fff" />
      </StyledSearchButton>
    );
  }, []);

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      {/* TODO: Need placeholder animation */}

      <StyledFormInput
        id="test"
        label="test-label"
        visibleLabel={false}
        value={value}
        inputProps={{ onChange: handleChange }}
      >
        플레이스 홀더 테스트 중
      </StyledFormInput>
      {searchButton}
    </StyledSearchForm>
  );
}
