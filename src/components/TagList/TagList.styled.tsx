import styled from 'styled-components';
import { color } from '@/styles/theme';

export const StyledTagListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 500px;
`;
export const StyledTagListItem = styled.li``;
export const StyledTagListLink = styled.a`
  display: block;
  padding: 10px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: ${color.gray06};
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    color: #00e6cc;
  }
`;
