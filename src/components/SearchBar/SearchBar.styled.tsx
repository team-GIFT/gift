import styled from 'styled-components';
import { FormInput } from '@/components/FormInput/FormInput';

export const StyledSearchWrapper = styled.div``;

export const StyledSearchForm = styled.form`
  display: flex;
  height: 44px;
  margin: 12px auto;
`;

export const StyledFormInput = styled(FormInput)`
  width: 100%;
`;

export const StyledSearchButton = styled.button`
  @keyframes bgAnimation {
    0% {
      background-position: top 100% right 100%;
    }
    50% {
      background-position: bottom 100% left 100%;
    }
    100% {
      background-position: top 100% right 100%;
    }
  }

  height: 44px;
  width: 44px;
  padding: 5px;
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.color.violet02} 0%,
    ${({ theme }) => theme.color.pink01} 50%,
    ${({ theme }) => theme.color.violet02} 100%
  );
  background-size: 400%;
  background-position: 0% 100%;
  animation: 4s linear 0s infinite normal bgAnimation;
  flex-shrink: 0;
  border: none;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      45deg,
      rgb(107, 42, 172) 0%,
      rgb(196, 52, 52) 50%,
      rgb(107, 42, 172) 100%
    );
  }
`;
