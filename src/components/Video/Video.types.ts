export interface VideoProps {
  src: string;
  className?: string;
  style?: {
    width: number;
    height: number;
  };
}

export interface StyledVideoContainerProps {
  $width: string | null;
}
