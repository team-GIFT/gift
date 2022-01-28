import styled from 'styled-components';
import { px2rem } from '@/styles/utils';
export const StyledSection = styled.section`
  margin-bottom: ${px2rem(25)};
`;
export const StyledTitleSection = styled(StyledSection)`
  display: flex;
  align-items: flex-end;
  gap: ${px2rem(10)};
  & h2 {
    margin: 0;
  }
`;
export const StyledTagList = styled.div`
  display: flex;
`;
export const StyledChannels = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;
  gap: ${px2rem(20)};
`;
export const StyledKeyword = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const StyledResultCount = styled.div`
  color: ${({ theme }) => theme.color.gray05};
`;
export const StyledTitle = styled.h2`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledNoResult = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.gray04};
  span {
    color: ${({ theme }) => theme.color.gray03};
  }
`;
