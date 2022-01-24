import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CardDetail() {
  // 임시로 유저
  const { gifId } = useParams();
  console.log(gifId);

  return (
    <>
      <Helmet>
        <title>GIFT-Card Detail</title>
      </Helmet>

      <div>여기는 card-detail/{gifId}</div>
    </>
  );
}
