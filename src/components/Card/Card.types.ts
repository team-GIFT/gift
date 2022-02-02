export interface CardProps {
  id: string | number;
  title: string;
  original: { width: number; height: number; mp4: string; mp4_size?: string };
  height?: number;
  className?: string;
  containerType?: string;
  gridWidth?: string;
  user?: {
    avatar_url: string;
    display_name: string;
    username: string;
    profile_url: string;
    is_verified: boolean;
    description: string;
    instagram_url: string;
  };
}

export interface StyledCardProps {
  $height: number;
  $ratio: number;
}

export interface StyledUserLinkProps {
  $userImageUrl: string;
  $userLinkUrl: string;
}
