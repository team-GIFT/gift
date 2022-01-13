export type SvgIconId =
  | 'favorite'
  | 'link'
  | 'more'
  | 'search'
  | 'search'
  | 'sound-off'
  | 'sound-on'
  | 'verified';

export interface SvgIconProps {
  id: SvgIconId;
  width?: number;
  height?: number;
  fill?: string;
}
