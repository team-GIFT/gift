import styled from 'styled-components';
import {
  StyledCardProps,
  StyledButtonProps,
  StyledUserLinkProps,
} from './Card.types';

export const StyledCard = styled.div`
  position: relative;

  width: ${({ $width, $height }: StyledCardProps) =>
    ($width / $height) * 140}px;
  height: 140px;
`;

export const StyledDetailLink = styled.a`
  display: block;

  &:focus {
    outline: solid #fff;
  }
`;

export const StyledButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 8px;
  margin: 8px 4px 0 0;
  opacity: 0;
  .card.isHovered & {
    opacity: 1;
    transition: opacity 0.4s;
  }
`;

export const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))<StyledButtonProps>`
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  border: 0;
  outline: 0;
  cursor: pointer;
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

// display: block;
// position: absolute;
// background-color: transparent;
// background-image: url('./assets/icon_link.svg');
// background: url('./assets/icon_link.svg) no-repeat 50% 50%;
// background-image: url(${svg});
// background-color: 'blue';
// background-image: url('./icon_link.svg');
