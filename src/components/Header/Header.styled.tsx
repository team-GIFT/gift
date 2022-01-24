import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  padding: 15px;
  max-width: 1070px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledMenuWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  position: relative;
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
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.violet01};
  padding: 8.5px 16px;
  display: inline-block;
  &:hover {
    background-color: ${({ theme }) => theme.color.violet02};
  }
`;

export const StyledUserWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray06};
  min-width: 124px;
  span {
    flex-grow: 1;
    text-align: center;
  }
`;
