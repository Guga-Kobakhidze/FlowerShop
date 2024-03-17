export interface SwiperCardProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface SwiperProps {
  swiperCard: SwiperCardProps[];
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
