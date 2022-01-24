import React from 'react';
// import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SearchResult() {
  // const { keyword } = useParams();
  console.log('search page');
  // console.log(keyword);
  return (
    <>
      <Helmet>
        <title> GIFs on GIFT</title>
      </Helmet>
      <div>여기는 search/</div>
    </>
  );
}
