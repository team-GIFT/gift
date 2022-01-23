import React from 'react';
import {
  StyledLeftSideWrap,
  StyledLeftSideChannelInfoWrap,
  StyledLeftSideDesc,
  StyledLeftSideFollowon,
  StyledLeftSideSource,
} from './DetailLeftSide.styled';
import { ChannelInfo } from '@/components';
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
              />
              <StyledLeftSideDesc>{data.user.description}</StyledLeftSideDesc>
              <StyledLeftSideFollowon>Follow on:</StyledLeftSideFollowon>
            </StyledLeftSideChannelInfoWrap>
          ) : null}
          <StyledLeftSideSource>
            <p>source:</p>
            <a
              href={`//${data.source}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.source}
            </a>
          </StyledLeftSideSource>
        </StyledLeftSideWrap>
      )}
    </>
  );
}
