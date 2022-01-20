import styled from 'styled-components';
import { StyeldTitleProps } from './Title.types';

export const StyledTitle = styled.span<StyeldTitleProps>`
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  font-size: ${({ $fontsize }) => $fontsize}px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.white};
`;

export const StyledTitleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
