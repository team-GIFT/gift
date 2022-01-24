import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CardDetail() {
  const { gifId } = useParams();
  // (임시) gifId로 파일 이름 받았다 치고
  const fakeTitle = 'fake 파일 이름';
  console.log(fakeTitle);

  return (
    <>
      <Helmet>
        <title>{fakeTitle} on GIFT</title>
      </Helmet>

      <div>여기는 detail/{gifId}</div>
    </>
  );
}
