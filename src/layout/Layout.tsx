import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { StyledLayoutWrapper } from './Layout.styled';
import { Helmet } from 'react-helmet-async';

export function Layout() {
  const header = useMemo(() => <Header />, []);
  return (
    <>
      <Helmet>
        <title>GIFT</title>
      </Helmet>
      {header}
      <StyledLayoutWrapper as="main">
        <Outlet />
      </StyledLayoutWrapper>
    </>
  );
}
