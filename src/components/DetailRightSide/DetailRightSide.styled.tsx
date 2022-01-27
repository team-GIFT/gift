import styled from 'styled-components';
import { StyledTagListWrap } from '@/components/TagList/TagList.styled';
import { px2rem } from '@/styles';

export const StyledRightSiedWrap = styled.div``;
export const StyledDetailTitle = styled.h2`
  color: ${({ theme: { color } }) => color.gray04};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  margin-bottom: ${px2rem(10)};
`;
export const StyledGifButtonWrap = styled.div`
  display: flex;
  gap: ${px2rem(30)};
`;
export const StyledGifLink = styled.a`
  width: 100%;
  background-color: ${({ theme: { color } }) => color.pink01};

  img {
    width: 100%;
  }

  video {
    width: 100%;
    vertical-align: middle;
  }
`;
export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTagList = styled(StyledTagListWrap)`
  margin-top: ${px2rem(30)};
`;
