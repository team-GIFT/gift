import React from 'react';
import {
  StyledRightSiedWrap,
  StyledDetailTitle,
  StyledGifButtonWrap,
  StyledGifLink,
  StyledButtonGroup,
  StyledButton,
} from './DetailRightSide.styled';
import { TagList } from '@/components';
import { useGetGifByIdQuery } from '@/services';

export function DetailRightSide() {
  const { data, isLoading } = useGetGifByIdQuery('3bc9YL28QWi3pYzi1p'); // user 정보 있음
  // const { data, isLoading } = useGetGifByIdQuery('3o6Mb30ZqYK5sNv88o'); // user 정보 없음
  console.log(data);

  const buttonType: string[] = ['favorite', 'share', 'embed'];
  const buttonList = buttonType.map((type) => {
    return (
      <StyledButton type="button" key={type}>
        {type}
      </StyledButton>
    );
  });
  return (
    <>
      {!isLoading && (
        <StyledRightSiedWrap>
          <StyledDetailTitle>{data.title}</StyledDetailTitle>
          <StyledGifButtonWrap>
            <StyledGifLink
              href={`//${data.source}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="바로가기"
            >
              <img src={data.images.original.webp} alt={data.title} />
            </StyledGifLink>
            <StyledButtonGroup>{buttonList}</StyledButtonGroup>
          </StyledGifButtonWrap>
        </StyledRightSiedWrap>
      )}
    </>
  );
}
