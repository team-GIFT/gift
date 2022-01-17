export type listItemProps =
  | 'Reactions'
  | 'Entertainment'
  | 'Sports'
  | 'Stickers'
  | 'Artists'
  | 'More';

export interface GlobalNavProps {
  listItems: listItemProps[];
}
