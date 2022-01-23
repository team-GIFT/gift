import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import App from '@/App/App';

render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme.darkMode}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);
