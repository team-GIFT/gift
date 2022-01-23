export interface StyledChannelProfileImageProps {
  $imageUrl: string;
  $size: number;
  $marginRight: number;
}
export interface StyledChannelChannelName {
  $overflow: string;
  $whiteSapce: string;
  $textOverflow: string;
}

export interface ChannelInfoProps {
  imgUrl: string;
  userName: string;
  channelName: string;
  channelLink: string;
  overflow?: string;
  whiteSpace?: string;
  textOverflow?: string;
  size?: number;
  marginRight?: number;
  verified?: boolean;
  isAvailableForWorking?: boolean;
  useUserName?: boolean;
  useChannelName?: boolean;
  onlyProfileImage?: boolean;
}
