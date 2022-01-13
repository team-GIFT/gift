import React, { useState, useCallback, useMemo } from 'react';
import { SvgIcon } from '..';
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
        {/* TODO: Need modify SvgIcon to resize with viewbox */}
        <SvgIcon id="search" width={30} height={30} fill="#fff" />
      </StyledSearchButton>
    );
  }, []);

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      {/* TODO: Need placeholder animation */}
      <StyledFormInput placeholder="temp" onChange={handleChange} />
      {searchButton}
    </StyledSearchForm>
  );
}
