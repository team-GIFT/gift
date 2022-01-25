import styled from 'styled-components';
import { px2rem } from '@/styles/utils';
export const StyledSuggestionsWrapper = styled.div`
  z-index: 999;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  margin-top: -${px2rem(12)};
  & a {
    display: block;
    padding: ${px2rem(17)};
    border-bottom: 1px dashed ${({ theme }) => theme.color.gray04};
  }
`;
