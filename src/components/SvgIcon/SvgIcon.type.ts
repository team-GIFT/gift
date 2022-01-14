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
  label?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}
