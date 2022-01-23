export interface CardProps {
  id: string | number;
  title: string;
  original: { width: number; height: number; mp4: string; mp4_size: string };
  height?: number;
  className?: string;
  containerType?: string;
  gridWidth?: string;
}

export interface StyledCardProps {
  $height: number;
  $ratio: number;
}

export interface StyledUserLinkProps {
  $userImageUrl: string;
  $userLinkUrl: string;
}
