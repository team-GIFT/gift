import styled from 'styled-components';
import { px2rem } from '@/styles';
export const StyledDetailWrap = styled.div`
  display: flex;
  padding-bottom: ${px2rem(50)};
  @media screen and (max-width: 768px) {
    display: block;
  }
  & > div:first-child {
    width: 30%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  & > div:last-child {
    width: 70%;
    padding-left: ${px2rem(20)};
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 0;
    }
  }
`;
