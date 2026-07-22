
export interface IUserStats {
  totalUsers: number;
  totalActiveUsers: number;
  totalInActiveUsers: number;
  totalBlockedUsers: number;
  newUsersInLast7Days: number;
  newUsersInLast30Days: number;
  usersByRole: {
    _id: string;
    count: number;
  }[];
}