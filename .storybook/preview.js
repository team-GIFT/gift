import ko from 'axe-core/locales/ko.json';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';

addDecorator((Story) => (
  <>
    <ThemeProvider theme={theme.darkMode}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </>
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
