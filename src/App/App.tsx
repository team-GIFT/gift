import React, { ReactElement } from 'react';
import { App as AppComponent, AppLogo, AppHeader, AppLink } from './App.styled';
import { Logo } from '@/components';

interface AppProps {
  color: string;
}

function App(props: AppProps): ReactElement {
  return (
    <>
      <Logo />
    </>
  );
}

export default App;
