import React, { ReactElement, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components';
import { Home, SearchResult, CardDetail, PageNotFound } from '@/pages';
import { Layout } from '@/layout';
function App(): ReactElement {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pageNotFound" element={<PageNotFound />} />
          <Route path="detail/:gifId" element={<CardDetail />} />
          <Route path="search/:keyword" element={<SearchResult />} />
          <Route path="*" element={<Navigate to="pageNotFound" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
