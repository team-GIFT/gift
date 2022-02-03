import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {
  StyledCard,
  StyledDetailLink,
  StyledButtonGroup,
  StyledUserLink,
  StyledTitle,
} from './Card.styled';
import { CardProps } from './Card.types';
import { Video, CardButton, ChannelInfo } from '@/components';

export function Card({
  id,
  original,
  title,
  className,
  containerType,
  height,
  gridWidth,
  user,
}: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleIsHovered = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false);
    },
    []
  );

  const handleIsFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement, Element>) => {
      const { type, relatedTarget, target } = e;

      const isOutOfRange =
        containerType === 'clips' &&
        (target.closest('.channel') || relatedTarget?.closest('.channel'));

      if (isOutOfRange) {
        setIsFocus(false);
        return;
      }

      type === 'blur' && !relatedTarget?.closest('.card')
        ? setIsFocus(false)
        : setIsFocus(true);
    },
    [containerType]
  );

  const channelProps = useMemo(
    () =>
      user && {
        imgUrl: user.avatar_url,
        channelLink: user.profile_url,
        userName: user.display_name,
        channelName: user.username,
        size:
          containerType === 'grid'
            ? 50
            : containerType === 'artists'
            ? 36
            : containerType === 'clips'
            ? 25
            : 28,
        verified: user.is_verified,
        onlyProfileImage: !containerType || containerType === 'grid',
        useUserName: containerType !== 'clips',
      },
    [containerType, user]
  );

  const children = useMemo(() => {
    return (
      <>
        <StyledDetailLink
          className={classNames({ clipsLink: containerType === 'clips' })}
          to={`/detail/${id}`}
          aria-label={title}
        >
          <Video
            className={classNames(
              { clipsVideo: containerType === 'clips' },
              { gridVideo: containerType === 'grid' }
            )}
            src={original.mp4}
            widthRatio={gridWidth}
          />
        </StyledDetailLink>
        <StyledButtonGroup className="buttonGroup">
          <CardButton buttonName="clipboard" aria-label="clipboard" />
          <CardButton buttonName="favorite" aria-label="favorite" />
          {containerType === 'clips' && (
            <CardButton buttonName="mute" aria-label="mute" />
          )}
        </StyledButtonGroup>
        {channelProps && (
          <>
            {containerType?.match(/clips|grid/) && (
              <StyledTitle className={containerType}>{title}</StyledTitle>
            )}
            <StyledUserLink className={containerType ?? 'trending'}>
              <ChannelInfo {...channelProps} />
            </StyledUserLink>
          </>
        )}
      </>
    );
  }, [channelProps, containerType, gridWidth, id, original.mp4, title]);

  return (
    <StyledCard
      className={classNames('card', className, { isHovered }, { isFocus })}
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsHovered}
      onFocus={handleIsFocus}
      onBlur={handleIsFocus}
      $ratio={original.width / original.height}
      $height={height as number}
    >
      {children}
    </StyledCard>
  );
}
