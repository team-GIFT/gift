import React, { useState, useCallback, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { StyledCard, StyledDetailLink, StyledButtonGroup } from './Card.styled';
import { CardProps } from './Card.types';
import { Video, CardButton, ChannelInfo } from '@/components';

export function Card({
  original,
  title,
  className,
  containerType,
  height,
  gridWidth,
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
          href="#"
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
          <CardButton
            buttonName="clipboard"
            aria-label="clipboard"
            onClick={() => {
              console.log('bye');
            }}
          />
          <CardButton
            buttonName="favorite"
            aria-label="favorite"
            onClick={() => {
              console.log('hi');
            }}
          />
          {containerType === 'clips' && (
            <CardButton
              buttonName="mute"
              aria-label="mute"
              onClick={() => {
                console.log('hi');
              }}
            />
          )}
        </StyledButtonGroup>
        {containerType === 'clips' && (
          <ChannelInfo
            {...{
              imgUrl: 'http://placehold.it/50x50',
              channelLink: '#',
              userName: '임씨 유저 소형',
              channelName: '@sosoyim',
              size: 50,
              verified: true,
              useUserName: true,
              useChannelName: true,
            }}
          />
        )}
      </>
    );
  }, [containerType, gridWidth, original.mp4, title]);

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
