import styled from 'styled-components';
import { Card } from '@/components';
import { px2rem } from '@/styles';

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: ${px2rem(12)};
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
