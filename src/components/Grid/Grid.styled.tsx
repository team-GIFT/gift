import styled from 'styled-components';
import { StyledGridItemProps } from './Grid.types';

export const SytledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
  width: ${(props) => (props['data-width'] === '1' ? '25' : '50')}%;
  overflow: hidden;
`;
