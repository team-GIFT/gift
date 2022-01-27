import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { px2rem } from '@/styles';

export const StyledArrowMoreLink = styled(Link)`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.gray04};

  svg {
    margin-left: ${px2rem(3)};
  }
`;
