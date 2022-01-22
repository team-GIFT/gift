export type GlobalNavIdProps =
  | 'reactions'
  | 'entertainment'
  | 'sports'
  | 'stickers'
  | 'artists'
  | 'more';

export interface GlobalNavItemProps {
  id: GlobalNavIdProps;
  href: string;
  text: string;
}

export interface GlobalNavProps {
  activeClassName?: string;
  className?: string;
}
