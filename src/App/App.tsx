import React, { ReactElement } from 'react';
import { Logo } from '@/components';

function App(): ReactElement {
  return (
    <div style={{ height: '98vh', display: 'flex', alignItems: 'center' }}>
      <Logo height={100} />
    </div>
  );
}

export default App;
