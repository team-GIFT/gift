import styled from 'styled-components';
import { px2rem } from '@/styles';

export const StyledArrowMoreLink = styled.a`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.gray04};

  svg {
    margin-left: ${px2rem(3)};
  }
`;
