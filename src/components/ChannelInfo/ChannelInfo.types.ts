export interface StyledChannelProfileImageProps {
  $imageUrl: string;
  $size: number;
  $marginRight: number;
}

export interface ChannelInfoProps {
  imgUrl: string;
  userName: string;
  channelName: string;
  channelLink: string;
  size?: number;
  marginRight?: number;
  verified?: boolean;
  isAvailableForWorking?: boolean;
  useUserName?: boolean;
  useChannelName?: boolean;
  onlyProfileImage?: boolean;
}
