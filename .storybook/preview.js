import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import ko from 'axe-core/locales/ko.json';

addDecorator((Story) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme.darkMode}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </StoreProvider>
));

export const parameters = {
  a11y: {
    config: { locale: ko },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
