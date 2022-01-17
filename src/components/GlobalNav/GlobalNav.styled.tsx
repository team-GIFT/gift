import styled from 'styled-components';
import { color } from '@/styles/theme';

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
  margin: 10 0 0 14;
`;

export const StyledGlobalNavItems = styled.li`
  height: 36px;
  border-right: ${color.black};
  position: relative;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    background-color: ${color.black};
    opacity: 1;
    inset: 0px -1px 4px;
    z-index: 1;
    transition: opacity 0.35s ease 0s;
  }
  &:hover::before {
    opacity: 0.3;
    transition: background-color 0.25s ease 0s;
  }
`;

export const StyledLink = styled.a`
  z-index: 2;
`;
