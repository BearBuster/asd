export interface ILeaderboardsUser {
  name: string;
  points: number;
  type: 'Iron' | 'Tires' | 'Electro' | 'Banners' | 'Clothes' | 'Oil' | 'Glass';
}
