import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useGetRandomGifQuery } from '@/services';
import {
  StyledErrorImageWrap,
  StyledErrorHeading,
  StyledErrorLink,
} from './PageNotFound.styled';

export default function PageNotFound() {
  const { data, isLoading } = useGetRandomGifQuery('404 error');

  console.log(data);

  return (
    <>
      {!isLoading && (
        <>
          <Helmet>
            <title>Page Not Found</title>
          </Helmet>
          <StyledErrorImageWrap>
            <img src={data?.images.original.webp} alt="404 error" />
          </StyledErrorImageWrap>
          <StyledErrorHeading>
            Oops! There’s nothing here. <br />
            Please Back to the Home!
          </StyledErrorHeading>
          <p
            css={`
              text-align: center;
              margin-bottom: 30px;
            `}
          >
            <StyledErrorLink to="/">Back to the HOME</StyledErrorLink>
          </p>
        </>
      )}
    </>
  );
}
