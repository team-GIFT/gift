import React from 'react';
import {
  StyledLeftSideWrap,
  StyledLeftSideChannelInfoWrap,
  StyledLeftSideDesc,
  StyledLeftSideFollowon,
  StyledLeftSideSource,
} from './DetailLeftSide.styled';
import { ChannelInfo, SvgIcon, A11yHidden } from '@/components';
import { useGetGifByIdQuery } from '@/services';

export function DetailLeftSide() {
  const { data, isLoading } = useGetGifByIdQuery('3bc9YL28QWi3pYzi1p'); // user 정보 있음
  // const { data, isLoading } = useGetGifByIdQuery('3o6Mb30ZqYK5sNv88o'); // user 정보 없음
  // console.log(data);

  return (
    <>
      {!isLoading && (
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
        </StyledLeftSideWrap>
      )}
    </>
  );
}
