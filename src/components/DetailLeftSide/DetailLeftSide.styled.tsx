import styled from 'styled-components';
import { px2rem } from '@/styles';
import insta from './assets/instagram@3x.png';
export const StyledLeftSideWrap = styled.div``;
export const StyledLeftSideChannelInfoWrap = styled.div`
  padding: ${px2rem(24)} 0;
`;
export const StyledLeftSideDesc = styled.p`
  margin-top: ${px2rem(20)};
  margin-bottom: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  color: ${({ theme: { color } }) => color.gray04};
`;

export const StyledLeftSideFollowon = styled.div`
  margin-top: ${px2rem(30)};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: bold;
  color: ${({ theme: { color } }) => color.gray04};
  p {
    margin-top: 0;
    margin-bottom: ${px2rem(10)};
  }
  a {
    display: inline-block;
    width: ${px2rem(24)};
    height: ${px2rem(24)};
    background: url(${insta}) no-repeat center center / cover;
  }
  & + div {
    margin-top: ${px2rem(20)};
  }
`;

export const StyledLeftSideSource = styled.div`
  padding: ${px2rem(24)} 0;
  font-weight: bold;
  p {
    margin-top: 0;
    margin-bottom: ${px2rem(8)};
    color: ${({ theme: { color } }) => color.gray04};
  }

  svg {
    margin-right: ${px2rem(6)};
  }
`;
