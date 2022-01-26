import React, { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DetailLeftSide, DetailRightSide } from '@/components';
import { useGetGifWithTagsByIdQuery } from '@/services';
import {
  fetchRelatedGifs,
  relatedGifsSelector,
  fetchRelatedStickers,
  relatedStickersSelector,
} from '@/store/featrues/giphy/giphy';
import { StyledDetailWrap } from './CardDetail.styled';

export default function CardDetail() {
  const { gifId } = useParams();
  const { data, isLoading } = useGetGifWithTagsByIdQuery(gifId as string);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(
      fetchRelatedGifs({ id: '3bc9YL28QWi3pYzi1p', num: 20, offset: 1 })
    );
    dispatch(fetchRelatedStickers({ id: '3bc9YL28QWi3pYzi1p', num: 12 }));
  }, [dispatch]);

  const { isLoading: isRelatedGifsLoading, gifs: relatedGifs } =
    useAppSelector(relatedGifsSelector);
  const { isLoading: isRelatedStickersLoading, gifs: relatedStickers } =
    useAppSelector(relatedStickersSelector);

  // (임시) gifId로 파일 이름 받았다 치고
  const fakeTitle = 'fake 파일 이름';
  console.log(fakeTitle);

  return (
    <>
      <Helmet>
        <title>{fakeTitle} on GIFT</title>
      </Helmet>

      {!isLoading && data && (
        <StyledDetailWrap>
          <DetailLeftSide data={data} />
          <DetailRightSide
            data={data}
            relatedGifs={relatedGifs}
            relatedStickers={relatedStickers}
          />
        </StyledDetailWrap>
      )}
    </>
  );
}
