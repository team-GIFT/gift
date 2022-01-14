import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from '@/styles/global.styled';
import App from '@/App/App';

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
