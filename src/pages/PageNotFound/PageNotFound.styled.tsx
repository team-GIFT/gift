import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { px2rem } from '@/styles';

export const StyledErrorImageWrap = styled.div`
  margin: 0 auto;
  max-width: ${px2rem(500)};
  text-align: center;

  img {
    border-radius: ${px2rem(10)};
    max-width: 100%;
  }
`;

export const StyledErrorHeading = styled.h2`
  margin-top: ${px2rem(30)};
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  line-height: 1.6;
`;

export const StyledErrorLink = styled(Link)`
  display: inline-block;
  padding: ${px2rem(20)};
  text-align: center;
  font-weight: bold;
  border-radius: ${px2rem(10)};
  background: ${({ theme: { color } }) => color.pink01};
`;
