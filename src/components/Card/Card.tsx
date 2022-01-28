import React, { useState, useCallback, useMemo, useEffect } from 'react';
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
            width={gridWidth}
          />
        </StyledDetailLink>
        <StyledButtonGroup className="buttonGroup">
          <CardButton buttonName="clipboard" aria-label="clipboard" />
          <CardButton buttonName="favorite" aria-label="favorite" />
          {containerType === 'clips' && (
            <CardButton buttonName="mute" aria-label="mute" />
          )}
        </StyledButtonGroup>
        {!containerType && user && (
          <StyledUserLink className="trending">
            <ChannelInfo
              {...{
                imgUrl: user?.avatar_url,
                channelLink: user.profile_url,
                userName: user?.display_name,
                channelName: user?.username,
                size: 28,
                verified: user?.is_verified,
                onlyProfileImage: true,
              }}
            />
          </StyledUserLink>
        )}
        {containerType === 'artists' && user && (
          <>
            <StyledUserLink className="artists">
              <ChannelInfo
                {...{
                  imgUrl: user?.avatar_url,
                  channelLink: user?.avatar_url,
                  userName: user?.display_name,
                  channelName: user?.username,
                  size: 36,
                  verified: user?.is_verified,
                }}
              />
            </StyledUserLink>
          </>
        )}
        {containerType === 'clips' && user && (
          <>
            <StyledTitle className="clips">{title}</StyledTitle>
            <StyledUserLink className="clips">
              <ChannelInfo
                {...{
                  imgUrl: user?.avatar_url,
                  channelLink: user?.avatar_url,
                  userName: user?.display_name,
                  channelName: user?.username,
                  size: 25,
                  verified: user?.is_verified,
                  useUserName: false,
                }}
              />
            </StyledUserLink>
          </>
        )}
        {containerType === 'grid' && (
          <>
            {user && (
              <StyledUserLink className="grid">
                <ChannelInfo
                  {...{
                    imgUrl: user?.avatar_url,
                    channelLink: user.profile_url,
                    userName: user?.display_name,
                    channelName: user?.username,
                    size: 50,
                    verified: user?.is_verified,
                    onlyProfileImage: true,
                  }}
                />
              </StyledUserLink>
            )}
            <StyledTitle className="grid">{title}</StyledTitle>
          </>
        )}
      </>
    );
  }, [containerType, gridWidth, id, original.mp4, title]);

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

{
  /* <ChannelInfo
{...{
  imgUrl: user?.avatar_url,
  channelLink: '#',
  userName: user?.display_name,
  channelName: user?.username,
  size: 50,
  verified: user?.is_verified,
  useUserName: true,
  useChannelName: true,
}}
/> */
}

{
  /* <ChannelInfo
{...{
  imgUrl: user?.avatar_url,
  channelLink: user.profile_url,
  userName: user?.display_name,
  channelName: user?.username,
  size: 28,
  verified: user?.is_verified,
  onlyProfileImage: true,
}}
/> */
}
