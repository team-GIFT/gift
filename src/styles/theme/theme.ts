import { DefaultTheme } from 'styled-components';
import { px2rem } from '@/styles';

const color = {
  white: '#ffffff',
  black: '#121212',
  gray04: '#b1b1b1',
  gray05: '#5c5c5c',
  gray06: '#3e3e3e',
  violet01: '#6e65ff',
  violet02: '#9933ff',
  pink01: '#ff6666',
  green01: '#00ff99',
  blue01: '#00ccff',
  yellow01: '#fff35c',
  primary: '#000000',
  outline: '#ffffff',
};

const fontSize = {
  xs: px2rem(15),
  s: px2rem(16),
  m: px2rem(17),
  l: px2rem(22),
  xl: px2rem(24),
  xxl: px2rem(36),
};

export const theme: { liteMode: DefaultTheme; darkMode: DefaultTheme } = {
  liteMode: {
    color: {
      ...color,
      primary: '#ffffff',
      outline: '#00ccff',
    },
    fontSize,
  },

  darkMode: {
    color,
    fontSize,
  },
};
