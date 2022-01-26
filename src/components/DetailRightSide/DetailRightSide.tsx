import React, { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import 'styled-components/macro';
import {
  StyledRightSiedWrap,
  StyledDetailTitle,
  StyledGifButtonWrap,
  StyledGifLink,
  StyledButtonGroup,
  StyledTagList,
} from './DetailRightSide.styled';
import { TagList, Title, Carousel, CardButton } from '@/components';
import { useGetGifByIdQuery } from '@/services';
import {
  fetchRelatedGifs,
  relatedGifsSelector,
  fetchRelatedStickers,
  relatedStickersSelector,
} from '@/store/featrues/giphy/giphy';
import { IGif } from '@giphy/js-types';

export function DetailRightSide() {
  const { data, isLoading } = useGetGifByIdQuery('3bc9YL28QWi3pYzi1p'); // user 정보 있음
  // const { data, isLoading } = useGetGifByIdQuery('3o6Mb30ZqYK5sNv88o'); // user 정보 없음

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchRelatedGifs({ id: '3bc9YL28QWi3pYzi1p', num: 5, offset: 1 }));
    dispatch(fetchRelatedStickers({ id: '3bc9YL28QWi3pYzi1p', num: 5 }));
  }, [dispatch]);

  const { isLoading: isRelatedGifsLoading, gifs: relatedGifs } =
    useAppSelector(relatedGifsSelector);
  const { isLoading: isRelatedStickersLoading, gifs: stickersGifs } =
    useAppSelector(relatedStickersSelector);

  const buttonType: ('favorite' | 'share' | 'embed')[] = [
    'favorite',
    'share',
    'embed',
  ];
  const buttonList = buttonType.map((type) => {
    return (
      <CardButton
        key={type}
        isTextMode={true}
        buttonName={type}
        aria-label={type}
      >
        {type}
      </CardButton>
    );
  });
  return (
    <>
      {!isLoading && (
        <StyledRightSiedWrap>
          <StyledDetailTitle>{(data as IGif).title}</StyledDetailTitle>
          <StyledGifButtonWrap>
            <StyledGifLink
              href={`//${(data as IGif).source}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="바로가기"
            >
              <img
                src={(data as IGif).images.original.webp}
                alt={(data as IGif).title}
              />
            </StyledGifLink>
            <StyledButtonGroup>{buttonList}</StyledButtonGroup>
          </StyledGifButtonWrap>
          <StyledTagList>
            <TagList tagTitle={(data as IGif).title} />
          </StyledTagList>
          <Title
            isIcon={false}
            as="h3"
            title="Related Stickers"
            fontsize={17}
            marginBottom={10}
            marginTop={20}
          />
          <Carousel height={140} cards={stickersGifs} />
          <Title
            isIcon={false}
            as="h3"
            title="Related GIFs"
            fontsize={17}
            marginBottom={10}
            marginTop={20}
          />
          <Carousel height={140} cards={relatedGifs} />
        </StyledRightSiedWrap>
      )}
    </>
  );
}
