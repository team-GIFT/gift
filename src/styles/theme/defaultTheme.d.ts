import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray03: string;
      gray04: string;
      gray05: string;
      gray06: string;
      violet01: string;
      violet02: string;
      pink01: string;
      green01: string;
      blue01: string;
      yellow01: string;
      primary: string;
      outline: string;
    };

    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
