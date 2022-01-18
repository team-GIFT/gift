import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import App from '@/App/App';

render(
  <StrictMode>
    <ThemeProvider theme={theme.darkMode}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
