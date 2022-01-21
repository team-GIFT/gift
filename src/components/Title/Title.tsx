import React from 'react';
import { StyledTitle, StyledTitleIcon } from './Title.styled';
import { TitleProps } from './Title.types';
import artists from './assets/artists.svg';
import clips from './assets/clips.svg';
import stories from './assets/stories.svg';
import trending from './assets/trending.svg';

function iconChange(iconType: string) {
  switch (iconType) {
    case 'artists':
      return artists;
    case 'clips':
      return clips;
    case 'stories':
      return stories;
    case 'trending':
      return trending;
    default:
  }
}

export function Title({
  title,
  fontsize = 24,
  marginBottom = 0,
  marginTop = 0,
  isIcon = true,
  iconType = 'trending',
  ...restProps
}: TitleProps): JSX.Element {
  return (
    <StyledTitle
      $fontsize={fontsize}
      $marginBottom={marginBottom}
      $marginTop={marginTop}
      {...restProps}
    >
      {isIcon && (
        <StyledTitleIcon src={iconChange(iconType)} alt="" aria-hidden={true} />
      )}
      {title}
    </StyledTitle>
  );
}
