import React, { ReactElement } from 'react';
import { Logo } from '@/components';

function App(): ReactElement {
  return (
    <div
      style={{
        height: '98vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Logo height={100} title="GIFT" />
    </div>
  );
}

export default App;
