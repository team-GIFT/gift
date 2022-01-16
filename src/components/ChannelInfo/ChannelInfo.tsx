import React from 'react';
import {
  StyledChannelInfoWrap,
  StyledChannelInfoLink,
  StyledChannelProfileImage,
  StyledChnnelNamseWrap,
  StyledChannelUserName,
  StyledChannelName,
  StyledChannelAvailableForWorking,
} from './ChannelInfo.styled';
import { ChannelInfoProps } from './ChannelInfo.types';
import { SvgIcon, A11yHidden } from '@/components';

export function ChannelInfo({
  imgUrl,
  userName,
  channelName,
  channelLink,
  size = 50,
  marginRight = 10,
  verified = false,
  isAvailableForWorking = false,
  useUserName = true,
  useChannelName = true,
  onlyProfileImage = false,
}: ChannelInfoProps): JSX.Element {
  return (
    <StyledChannelInfoWrap>
      <StyledChannelInfoLink href={channelLink}>
        <A11yHidden>{userName}님의 페이지로 이동</A11yHidden>
        <StyledChannelProfileImage
          $size={size}
          $marginRight={marginRight}
          $imageUrl={imgUrl}
        />
        {!onlyProfileImage && (
          <StyledChnnelNamseWrap>
            {useUserName && (
              <StyledChannelUserName>{userName}</StyledChannelUserName>
            )}
            {useChannelName ? (
              isAvailableForWorking ? (
                <StyledChannelAvailableForWorking>
                  Available for Work
                </StyledChannelAvailableForWorking>
              ) : (
                <StyledChannelName>
                  {channelName}
                  {verified && (
                    <button type="button">
                      <SvgIcon
                        id="verified"
                        label="verified"
                        width={14}
                        height={14}
                        fill="#fff"
                      />
                    </button>
                  )}
                </StyledChannelName>
              )
            ) : null}
          </StyledChnnelNamseWrap>
        )}
      </StyledChannelInfoLink>
    </StyledChannelInfoWrap>
  );
}
