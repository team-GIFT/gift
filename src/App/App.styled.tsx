import styled, { keyframes } from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

// export const AppHeader = styled.header.attrs(({bgColor})) => ({

// })`
//   background-color: #282c34;
// min-height: 100vh;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// font-size: calc(10px + 2vmin);
// color: white;
// `

interface headerProps {
  bgColor: string;
}

export const AppHeader = styled.header.attrs(({ bgColor }: headerProps) => ({
  bgColor: bgColor ?? '#282c34',
}))`
  background-color: ${({ bgColor }: headerProps): string => bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;
