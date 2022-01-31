import styled from 'styled-components';
import { StyledGridItemProps } from './Grid.types';
import { px2rem } from '@/styles';

export const SytledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 1%;
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
  width: ${(props) => (props['data-width'] === '1' ? '24.25' : '49.5')}%;
  overflow: hidden;
  margin-top: 1%;
`;
