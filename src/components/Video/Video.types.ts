export interface VideoProps {
  src: string;
  className?: string;
  widthRatio: string | undefined;
  style?: {
    width: number;
    height: number;
  };
}

export interface StyledVideoContainerProps {
  $width: string | null;
}
