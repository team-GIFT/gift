export interface CardProps {
  id: string | number;
  title: string;
  original: { width: number; height: number; mp4: string; mp4_size: string };
  className?: string;
  containerType?: string;
}

export interface StyledUserLinkProps {
  $userImageUrl: string;
  $userLinkUrl: string;
}
