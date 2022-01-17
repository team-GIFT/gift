import React, { ReactElement } from 'react';
import { App as AppComponent, AppLogo, AppHeader, AppLink } from './App.styled';
import { Logo } from '@/components';

interface AppProps {
  color: string;
}

function App(props: AppProps): ReactElement {
  return (
    <div style={{ height: '98vh', display: 'flex', alignItems: 'center' }}>
      <Logo height={100} />
    </div>
  );
}

export default App;
