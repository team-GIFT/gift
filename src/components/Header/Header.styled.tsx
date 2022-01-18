import styled from 'styled-components';
import { color } from '@/styles/theme';

export const StyledHeader = styled.header`
  // max-width: 1040px;
  padding-top: 15px;
`;

export const StyledMenuWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const StyledLogoWrap = styled.h1`
  min-width: 164px;
  width: auto;
  margin: 0;
`;

export const StyledLinkWrap = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledLink = styled.a`
  color: ${color.white};
  background-color: ${color.violet02};
  padding: 8.5px 16px;
  display: inline-block;
  &:hover {
    background-color: ${color.violet01};
  }
`;

export const StyledUserWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  background-color: ${color.gray06};
  min-width: 124px;
  span {
    flex-grow: 1;
    text-align: center;
  }
`;
