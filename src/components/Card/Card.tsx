import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {
  StyledCard,
  StyledDetailLink,
  StyledButtonGroup,
  StyledUserLink,
} from './Card.styled';
import { CardProps } from './Card.types';
import { Video, CardButton } from '@/components';

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
          <CardButton
            buttonName="clipboard"
            aria-label="클립보드"
            onClick={() => {
              console.log('bye');
            }}
          />
          <CardButton
            buttonName="favorite"
            aria-label="좋아요"
            onClick={() => {
              console.log('hi');
            }}
          />
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
