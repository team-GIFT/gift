export interface StyledChannelProfileImageProps {
  $imageUrl: string;
  $size: number;
  $marginRight: number;
}

export interface ChannelInfoProps {
  channelLink: string;
  imgUrl: string;
  userName: string;
  channelName: string;
  size: number;
  marginRight: number;
  verified: boolean;
  isAvailableForWorking: boolean;
  useUserName: boolean;
  useChannelName: boolean;
  onlyProfileImage: boolean;
}
