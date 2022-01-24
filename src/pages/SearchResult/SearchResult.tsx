import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function SearchResult() {
  const { keyword } = useParams();
  return (
    <>
      <Helmet>
        <title>GIFT-Search</title>
      </Helmet>
      <div>여기는 search/{keyword}</div>
    </>
  );
}
