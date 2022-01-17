import ko from 'axe-core/locales/ko.json';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '@/styles/global.styled';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
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
