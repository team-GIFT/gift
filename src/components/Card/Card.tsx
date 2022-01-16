import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {
  StyledCard,
  StyledDetailLink,
  StyledVideo,
  StyledButtonGroup,
  StyledButton,
  StyledUserLink,
} from './Card.styled';
import { CardProps } from './Card.types';
import IconLink from './assets/icon_link.svg';
import IconFavorite from './assets/icon_favorite.svg';
import { Video } from '@/components';

export function Card({ url, preview, user }: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(() => {
    setIsHovered(!isHovered);
  }, [isHovered]);

  const children = useMemo(() => {
    return (
      <>
        <StyledDetailLink href={url}>
          <Video src={preview.mp4} />
          {/* 대체텍스트 */}
        </StyledDetailLink>
        <StyledButtonGroup className="buttonGroup">
          <StyledButton $imageUrl={IconLink} />
          {/* 대체텍스트 */}
          <StyledButton $imageUrl={IconFavorite} />
          {/* 대체텍스트 */}
        </StyledButtonGroup>
        {user && (
          <StyledUserLink
            className="userLink"
            $userImageUrl={user.image}
            $userLinkUrl={user.link}
          >
            {/* 대체텍스트 */}
          </StyledUserLink>
        )}
      </>
    );
  }, [preview.mp4, url, user]);

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
