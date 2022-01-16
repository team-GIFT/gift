import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {
  StyledCard,
  StyledDetailLink,
  StyledButtonGroup,
  StyledButton,
  StyledUserLink,
} from './Card.styled';
import { CardProps } from './Card.types';
import IconLink from './assets/icon_link.svg';
import IconFavorite from './assets/icon_favorite.svg';
import { Video } from '@/components';

export function Card({ title, url, preview, user }: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(() => {
    setIsHovered(!isHovered);
  }, [isHovered]);

  const children = useMemo(() => {
    return (
      <>
        <StyledDetailLink href={url} aria-label={title}>
          <Video src={preview.mp4} />
        </StyledDetailLink>
        <StyledButtonGroup className="buttonGroup">
          <StyledButton $imageUrl={IconLink} aria-label="링크 복사" />
          <StyledButton $imageUrl={IconFavorite} aria-label="좋아요" />
        </StyledButtonGroup>
        {user && (
          <StyledUserLink
            className="userLink"
            $userImageUrl={user.image}
            $userLinkUrl={user.link}
            aria-label={user.name}
          />
        )}
      </>
    );
  }, [preview.mp4, title, url, user]);

  return (
    <StyledCard
      $width={preview.width}
      $height={preview.height}
      className={classNames('card', { isHovered })}
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsHovered}
    >
      {children}
    </StyledCard>
  );
}
