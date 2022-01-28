import styled from 'styled-components';
import { StyledGridItemProps } from './Grid.types';
import { px2rem } from '@/styles';

export const SytledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: ${px2rem(6)};
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
  width: ${(props) => (props['data-width'] === '1' ? '24.5' : '49')}%;
  overflow: hidden;
`;
