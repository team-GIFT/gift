import styled from 'styled-components';
import { Title } from '@/components';
import { px2rem } from '@/styles/utils';

export const StyledSection = styled.section`
  margin-top: ${px2rem(50)};
`;

export const StyledTitle = styled(Title)`
  margin-bottom: ${px2rem(10)};
`;
