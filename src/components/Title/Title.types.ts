export interface TitleProps {
  title: string;
  fontsize?: number;
  marginBottom?: number;
  marginTop?: number;
  iconType?: string;
  as?: React.ElementType;
  isIcon?: boolean;
  restProps?: object;
}

export interface StyeldTitleProps {
  $fontsize: number;
  $marginBottom: number;
  $marginTop: number;
}
