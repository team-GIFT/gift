import styled from 'styled-components';

export const StyledTagListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 500px;
`;
export const StyledTagListLink = styled.a`
  display: block;
  padding: 10px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: ${({ theme: { color } }) => color.gray06};
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    color: #00e6cc;
  }
`;
export const StyledMoreButton = styled.button`
  display: block;
  padding: 10px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: ${({ theme: { color } }) => color.gray06};
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.white};
  border-width: 0px;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    color: #00e6cc;
  }
`;
