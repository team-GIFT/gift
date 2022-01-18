import React from 'react';
import 'styled-components';
import {
  StyledTagListWrap,
  StyledTagListItem,
  StyledTagListLink,
} from './TagList.styled';

export function TagList(): JSX.Element {
  const dumyTags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];
  const tagItems = dumyTags.map((item) => {
    return (
      <StyledTagListItem key={item}>
        <StyledTagListLink href="#">#{item}</StyledTagListLink>
      </StyledTagListItem>
    );
  });
  return <StyledTagListWrap>{tagItems}</StyledTagListWrap>;
}
