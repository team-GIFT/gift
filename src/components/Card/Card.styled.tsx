import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledCardProps, StyledUserLinkProps } from './Card.types';

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  width: ${({ $height, $ratio }) => $height * $ratio}px;
  height: ${({ $height }) => $height}px;
`;

export const StyledDetailLink = styled(Link)`
  display: block;
  height: 100%;

  &.clipsLink {
    height: initial;
  }

  &:focus:visible {
    outline: solid #fff;
  }
`;

export const StyledButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const StyledUserLink = styled.div`
  &.trending {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 8px 8px;
    opacity: 0;
    .card.isHovered & {
      opacity: 1;
      transition: opacity 0.4s;
    }
  }

  &.artists {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 8px 8px;
  }

  &.clips {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  &.grid {
    position: absolute;
    left: 0;
    top: 0;
    margin: 8px 0 0px 8px;
  }
`;

export const StyledTitle = styled.p`
  margin: 4px 0;
  font-size: ${({ theme }) => theme.fontSize.s};

  &.clips {
    color: ${({ theme }) => theme.color.gray03};
  }

  &.grid {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 8px 8px;
    width: 60%;
  }
`;
