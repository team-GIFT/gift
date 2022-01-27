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
  overflow = 'hidden',
  whiteSpace = 'nowrap',
  textOverflow = 'ellipsis',
  verified = false,
  isAvailableForWorking = false,
  useUserName = true,
  useChannelName = true,
  onlyProfileImage = false,
}: ChannelInfoProps): JSX.Element {
  return (
    <StyledChannelInfoWrap>
      <StyledChannelInfoLink className="channel" to={channelLink}>
        <A11yHidden>{userName}님의 페이지로 이동</A11yHidden>
        <StyledChannelProfileImage
          $size={size}
          $marginRight={marginRight}
          $imageUrl={imgUrl}
        />
        {!onlyProfileImage && (
          <StyledChnnelNamseWrap>
            {useUserName && (
              <StyledChannelUserName
                $overflow={overflow}
                $whiteSapce={whiteSpace}
                $textOverflow={textOverflow}
              >
                {userName}
              </StyledChannelUserName>
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
                    <span>
                      <SvgIcon
                        id="verified"
                        label="verified"
                        width={14}
                        height={14}
                        fill="#fff"
                      />
                    </span>
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
