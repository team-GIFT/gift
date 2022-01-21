import styled from 'styled-components';
import { StyeldTitleProps } from './Title.types';
import { px2rem } from '@/styles/utils';

export const StyledTitle = styled.span<StyeldTitleProps>`
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  font-size: ${({ $fontsize }) => $fontsize}px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.white};
`;

export const StyledTitleIcon = styled.img`
  width: ${px2rem(24)};
  height: ${px2rem(24)};
  margin-right: ${px2rem(10)};
`;
