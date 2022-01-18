import styled from 'styled-components';
import { StyledChannelProfileImageProps } from './ChannelInfo.types';

export const StyledChannelInfoWrap = styled.div``;
export const StyledChannelInfoLink = styled.a`
  display: flex;
`;

export const StyledChannelProfileImage = styled.span<StyledChannelProfileImageProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin-right: ${({ $marginRight }) => $marginRight}px;
  background: url(${({ $imageUrl }) => $imageUrl}) no-repeat center center /
    cover;
  transition: all 0.3s;
`;
export const StyledChnnelNamseWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`;
export const StyledChannelUserName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  & + p {
    margin-top: 3px;
  }
`;
export const StyledChannelName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray04};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  button {
    padding: 0;
    margin-left: 3px;
    background: transparent;
    border: none;
  }
`;

export const StyledChannelAvailableForWorking = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.green01};
  margin: 0;

  &::before {
    content: '●';
    font-size: 10px;
    margin-right: 5px;
    vertical-align: middle;
  }
`;
