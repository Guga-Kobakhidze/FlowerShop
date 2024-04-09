export interface SwiperCardProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface SwiperBestCardProps {
  id: number;
  image: string;
  title: string;
  text: string;
  text2: string;
}

export interface SwiperProps {
  swiperCard: SwiperCardProps[];
}

export interface SwiperBestProps {
  swiperCard: SwiperBestCardProps[];
}

export interface UserDataProps {
  id: number;
  icon: string;
  name: string;
  desc: string;
  stars: number;
}

export interface UserinfoProps {
  userInfo: UserDataProps[];
}

export interface TrandingCardProps {
  id: number;
  title: string;
  desc: string;
  rs: string;
  image: string;
}

export interface TrandyCardProps {
  trandyCard: TrandingCardProps[];
}

// ButtonProps

export interface ClickBtnProps {
  content?: string;
  image?: string;
}
