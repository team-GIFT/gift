import { RefObject } from 'react';

export interface SubMenuProps {
  subMenuRef?: RefObject<HTMLDivElement>;
  className?: string;
}

export interface LinkProps {
  id: string;
  href: string;
  text: string;
  children?: LinkProps[];
}

export interface StyledTopSectionListItemUlProps {
  $columns?: string | number;
}

export interface StyledSubMenuWrapperProps {
  ref?: RefObject<HTMLDivElement>;
}
