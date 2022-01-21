export interface LinkProps {
  id: string;
  href: string;
  text: string;
  children?: LinkProps[];
}

export interface StyledTopSectionListItemUlProps {
  $columns?: string | number;
}
