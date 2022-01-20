import styled from 'styled-components';
import { StyledCardProps, StyledUserLinkProps } from './Card.types';

export const StyledCard = styled.div`
  position: relative;

  width: ${({ $width, $height }: StyledCardProps) =>
    ($width / $height) * 140}px;
  height: 140px;
`;

export const StyledDetailLink = styled.a`
  display: block;

  &:focus:visible {
    outline: solid #fff;
  }
`;

export const StyledButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  opacity: 0;
  .card.isHovered & {
    opacity: 1;
    transition: opacity 0.4s;
  }
`;

export const StyledUserLink = styled.a.attrs(
  ({ $userLinkUrl }: StyledUserLinkProps) => ({
    href: $userLinkUrl,
  })
)<StyledUserLinkProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 8px 4px;
  background-position: 0 0;
  background-size: cover;
  background-image: url(${({ $userImageUrl }: StyledUserLinkProps) =>
    $userImageUrl});
  opacity: 0;
  .card.isHovered & {
    opacity: 1;
    transition: opacity 0.4s;
  }
`;
