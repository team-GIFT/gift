import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useInView } from 'react-intersection-observer';

export default function CardDetail() {
  const { gifId } = useParams();
  const gridOffset = useRef<number>(1);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetGifWithTagsByIdQuery(
    gifId as string
  );

  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(
      fetchRelatedGifs({
        id: gifId as string,
        num: 20,
        offset: gridOffset.current,
      })
    );
    dispatch(fetchRelatedStickers({ id: gifId as string, num: 12 }));
  }, [dispatch, gifId]);

  const { gifs: relatedGifs } = useAppSelector(relatedGifsSelector);
  const { isLoading: isRelatedStickersLoading, gifs: relatedStickers } =
    useAppSelector(relatedStickersSelector);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  useEffect(() => {
    if (error) {
      navigate('pageNotFound');
    }
    if (inView) {
      gridOffset.current += 1;
      dispatch(
        fetchRelatedGifs({
          id: gifId as string,
          num: 20,
          offset: gridOffset.current,
        })
      );
    }
  }, [dispatch, error, gifId, inView, navigate]);

  return (
    <>
      {!isLoading && !isRelatedStickersLoading && data && (
        <>
          <Helmet>
            <title>{data.title} on GIFT</title>
          </Helmet>

          <StyledDetailWrap>
            <DetailLeftSide data={data} />
            <DetailRightSide
              data={data}
              relatedGifs={relatedGifs}
              relatedStickers={relatedStickers}
              forwardRef={ref}
            />
          </StyledDetailWrap>
        </>
      )}
    </>
  );
}
