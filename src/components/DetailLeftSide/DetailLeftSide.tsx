import React from 'react';
import {
  StyledLeftSideWrap,
  StyledLeftSideChannelInfoWrap,
  StyledLeftSideDesc,
  StyledLeftSideFollowon,
  StyledLeftSideSource,
} from './DetailLeftSide.styled';
import { DetailLeftSideProps } from './DetailLeftSide.types';
import { ChannelInfo, SvgIcon, A11yHidden } from '@/components';

export function DetailLeftSide({ data }: DetailLeftSideProps) {
  return (
    <>
      <StyledLeftSideWrap>
        {data.user ? (
          <StyledLeftSideChannelInfoWrap>
            <ChannelInfo
              imgUrl={data.user.avatar_url}
              userName={data.user.display_name}
              channelName={data.user.username}
              channelLink={data.user.profile_url}
              verified={data.user.is_verified}
              textOverflow="initial"
              whiteSpace="initial"
              overflow="initial"
            />
            <StyledLeftSideDesc>{data.user.description}</StyledLeftSideDesc>
            {data.user.instagram_url && (
              <StyledLeftSideFollowon>
                <p>Follow on:</p>
                <a
                  href={`//${data.user.instagram_url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <A11yHidden>go to instagram</A11yHidden>
                </a>
              </StyledLeftSideFollowon>
            )}
          </StyledLeftSideChannelInfoWrap>
        ) : null}
        {data.source ? (
          <StyledLeftSideSource>
            <p>source:</p>
            <a
              href={`//${data.source}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                id="new-window"
                fill="none"
                width={14}
                height={14}
                aria-hidden={true}
              />
              {data.source}
            </a>
          </StyledLeftSideSource>
        ) : null}
      </StyledLeftSideWrap>
    </>
  );
}
