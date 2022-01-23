import styled from 'styled-components';
import { px2rem } from '@/styles';

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
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  color: ${({ theme: { color } }) => color.gray04};
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
