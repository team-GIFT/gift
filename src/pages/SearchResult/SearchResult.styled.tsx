import styled from 'styled-components';
import { px2rem } from '@/styles/utils';
export const StyledSection = styled.section`
  margin-bottom: ${px2rem(15)};
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
