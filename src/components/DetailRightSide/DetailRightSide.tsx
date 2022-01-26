import React, { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  StyledRightSiedWrap,
  StyledDetailTitle,
  StyledGifButtonWrap,
  StyledGifLink,
  StyledButtonGroup,
  StyledTagList,
} from './DetailRightSide.styled';
import { TagList, Title, Carousel, CardButton } from '@/components';
import { useGetGifWithTagsByIdQuery } from '@/services';
import {
  fetchRelatedGifs,
  relatedGifsSelector,
  fetchRelatedStickers,
  relatedStickersSelector,
} from '@/store/featrues/giphy/giphy';
import { GifWithTagsResult } from '@/services/types/query';

export function DetailRightSide() {
  const { data, isLoading } = useGetGifWithTagsByIdQuery('3bc9YL28QWi3pYzi1p'); // user 정보 있음

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(
      fetchRelatedGifs({ id: '3bc9YL28QWi3pYzi1p', num: 20, offset: 1 })
    );
    dispatch(fetchRelatedStickers({ id: '3bc9YL28QWi3pYzi1p', num: 12 }));
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
          <StyledDetailTitle>
            {(data as GifWithTagsResult).title}
          </StyledDetailTitle>
          <StyledGifButtonWrap>
            <StyledGifLink
              href={`//${(data as GifWithTagsResult).source}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="바로가기"
            >
              <img
                src={(data as GifWithTagsResult).images.original.webp}
                alt={(data as GifWithTagsResult).title}
              />
            </StyledGifLink>
            <StyledButtonGroup>{buttonList}</StyledButtonGroup>
          </StyledGifButtonWrap>
          <StyledTagList>
            <TagList tags={(data as GifWithTagsResult).tags} />
          </StyledTagList>
          <section>
            <Title
              isIcon={false}
              as="h3"
              title="Related Stickers"
              fontsize={17}
              marginBottom={10}
              marginTop={20}
            />
            <Carousel height={140} cards={stickersGifs} />
          </section>
          <section>
            <Title
              isIcon={false}
              as="h3"
              title="Related GIFs"
              fontsize={17}
              marginBottom={10}
              marginTop={20}
            />
            <Carousel height={140} cards={relatedGifs} />
          </section>
        </StyledRightSiedWrap>
      )}
    </>
  );
}
