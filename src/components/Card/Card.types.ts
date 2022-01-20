export interface CardProps {
  title: string;
  url: string;
  preview: {
    height: number;
    mp4: string;
    mp4_size: string;
    width: number;
  };
  user?: {
    image: string;
    link: string;
    name: string;
  };
  className?: string;
  containerType: string;
}

export interface StyledUserLinkProps {
  $userImageUrl: string;
  $userLinkUrl: string;
}
