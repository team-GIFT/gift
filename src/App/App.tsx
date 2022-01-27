import React, { ReactElement } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { LoadingSpinner } from '@/components';
import { Layout } from '@/layout';

const fallbackLoadable = {
  fallback: <LoadingSpinner />,
};

const Home = loadable(
  () => import(/* webpackChunkName: "Home" */ '@/pages/Home/Home'),
  fallbackLoadable
);
const SearchResult = loadable(
  () =>
    import(
      /* webpackChunkName: "SearchResult" */ '@/pages/SearchResult/SearchResult'
    ),
  fallbackLoadable
);
const CardDetail = loadable(
  () =>
    import(
      /* webpackChunkName: "CardDetail" */ '@/pages/CardDetail/CardDetail'
    ),
  fallbackLoadable
);
const PageNotFound = loadable(
  () =>
    import(
      /* webpackChunkName: "PageNotFound" */ '@/pages/PageNotFound/PageNotFound'
    ),
  fallbackLoadable
);

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pageNotFound" element={<PageNotFound />} />
        <Route path="detail/:gifId" element={<CardDetail />} />
        <Route path="search/:keyword" element={<SearchResult />} />
        <Route path="*" element={<Navigate to="pageNotFound" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
