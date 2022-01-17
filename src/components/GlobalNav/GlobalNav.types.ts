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
