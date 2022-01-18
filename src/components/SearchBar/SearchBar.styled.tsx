import styled from 'styled-components';
import { FormInput } from '@/components/FormInput/FormInput';

export const StyledSearchForm = styled.form`
  display: flex;
  height: 44px;
  margin: 12px auto;
`;

export const StyledFormInput = styled(FormInput)`
  width: 100%;
`;

export const StyledSearchButton = styled.button`
  height: 44px;
  width: 44px;
  padding: 5px;
  background-color: tomato;
  flex-shrink: 0;
`;
