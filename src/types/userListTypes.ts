export interface IpageChange {
  selected: number;
}

interface itemsTypes {
  login: string;
  avatar_url: string;
  id: number;
}

export interface IuserDataTypes {
  incomplete_results: boolean;
  items: itemsTypes[];
  total_count: number;
}

export interface userListTypes {
  data: IuserDataTypes | undefined;
}
