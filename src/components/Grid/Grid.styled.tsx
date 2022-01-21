import styled from 'styled-components';

export const SytledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGridItem = styled.div`
  width: ${(props) => (props['data-width'] === '1' ? '25' : '50')}%;
  height: ${(props) => (props['data-width'] === '1' ? '100' : '50')}%;
  overflow: hidden;
`;
