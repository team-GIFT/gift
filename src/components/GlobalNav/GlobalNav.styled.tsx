import styled from 'styled-components';
import { px2rem } from '@/styles';

const globalNavHeight = px2rem(36);

export const StyledNav = styled.nav`
  @keyframes fadeIn {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  .sub-menu.isActive {
    animation: fadeIn 0.2s ease-out;
    display: flex;
    position: absolute;
    top: 100%;
    transform: translateY(${px2rem(10)});
    left: 0;
    opacity: 1;
    transition: opacity 0.35s ease 0s;
  }

  .sub-menu {
    display: none;
  }
`;

export const StyledGlobalNav = styled.ul`
  background: linear-gradient(
      to right,
      rgb(0, 204, 255),
      rgb(153, 51, 255) 31%,
      rgb(230, 70, 182) 52%,
      rgb(255, 249, 170) 77%,
      rgb(0, 255, 153),
      rgb(0, 204, 255)
    )
    0% 50% / 200% 50%;
  display: flex;
  justify-content: space-around;
  min-width: 496px;
  @media screen and (max-width: 1069px) {
    min-width: 0;
  }
`;

export const StyledGlobalNavItems = styled.li`
  height: ${globalNavHeight};
  border-right: 5px solid ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  & > a,
  & > button {
    & > span {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.color.black};
      opacity: 1;
      inset: 0px -1px 4px;
      z-index: 1;
      transition: opacity 0.35s ease 0s;
    }
    &:hover::after {
      opacity: 0.3;
      transition: background-color 0.25s ease 0s;
    }
  }
`;

export const StyledLink = styled.a`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: ${globalNavHeight};
`;

export const StyledButton = styled.button`
  z-index: 2;
  background-color: transparent;
  color: white;
  width: 100%;
  height: 100%;
  border: 0;
  position: relative;
`;
