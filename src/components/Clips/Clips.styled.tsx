import styled from 'styled-components';
import { Card } from '@/components';

export const StyledSection = styled.section`
  display: flex;
  width: 739px;
  justify-content: space-between;
`;

export const StyledPrimaryCard = styled(Card)`
  flex-grow: 3;
  flex-basis: 0;
`;

export const StyledWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
