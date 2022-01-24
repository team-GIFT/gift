import React, { useMemo } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '@/components';
import { StyledLayoutWrapper } from './Layout.styled';

export function Layout() {
  const header = useMemo(() => <Header />, []);
  return (
    <>
      {header}
      <StyledLayoutWrapper as="main">
        <Outlet />
      </StyledLayoutWrapper>
    </>
  );
}
