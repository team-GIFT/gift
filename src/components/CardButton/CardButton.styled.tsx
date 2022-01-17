import styled, { keyframes, css } from 'styled-components';
import favorite from './assets/favorite.png';
import clipboard from './assets/clipboard.svg';
import icons from './assets/icons.svg';
import volume from './assets/volume.svg';
import { ButtonInfoProps, StyledButtonProps } from './CardButton.types';

const buttonInfos: ButtonInfoProps = {
  favorite: {
    backgroundUrl: `url(${favorite}) -2px -2px / 240px 80px no-repeat transparent;`,

    animation: css`
      0.8s ease-out 0.3s infinite normal forwards running
      ${keyframes`
      0% { transform: scale(1.2); }
      100% { transform: scale(1); }`}`,
  },

  clipboard: {
    backgroundUrl: `url(${clipboard}) 0px -252px / 180px 360px no-repeat transparent;`,

    animation: css`
      0.5s steps(5) infinite alternate
      ${keyframes`
      0% { background-position: 0 -252px; }
      100% { background-position: -180px -252px; }`}`,
  },

  share: {
    backgroundUrl: `url(${icons}) 3px -147px / 180px 300px no-repeat transparent;`,

    animation: css`
      1s steps(1) 0s infinite normal none running
      ${keyframes`
      0% { background-position: 3px -147px; }
      18% { background-position: -27px -147px; }
      36% { background-position: -57px -147px; }
      54% { background-position: -87px -147px; }
      72% { background-position: -117px -147px; }
      90% { background-position: -147px -147px; }
      100% { background-position: -147px -147px; }`}`,
  },

  embed: {
    backgroundUrl: `url(${icons}) 4px -177px / 180px 300px no-repeat transparent;`,

    animation: css`
      0.5s steps(1) 0s infinite alternate none running
      ${keyframes`
      0% { background-position: -26px -177px; }
      20% { background-position: -56px -177px; }
      40% { background-position: -86px -177px; }
      60% { background-position: -116px -177px; }
      100% { background-position: -146px -177px; }`}`,
  },

  mute: {
    backgroundUrl: `url(${volume}) 0px 0px  no-repeat transparent;`,
  },

  nonMute: {
    backgroundUrl: `url(${volume}) 0px -38px no-repeat transparent;`,
  },
};

export const StyledButton = styled.button<StyledButtonProps>`
  width: 36px;
  height: 36px;
  overflow: hidden;
  border: 0;
  cursor: pointer;

  background: ${({ $name }) => buttonInfos[$name]?.backgroundUrl};

  &:hover {
    animation: ${({ $name }) =>
      $name !== 'mute' && $name !== 'nonMute' && buttonInfos[$name].animation};
  }

  button&:focus-visible {
    outline: solid white 1px;
  }
`;
