import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import App from '@/App/App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme.darkMode}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
