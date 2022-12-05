interface IownerTypes {
  login: string;
  avatar_url: string;
  repos_url: string;
}

interface itemsTypes {
  name: string;
  owner: IownerTypes;
  description: string;
  language: string;
  forks_count: number;
  updated_at: string;
  id:number;
}
export interface IdataTypes {
  incomplete_results: boolean;
  items: itemsTypes[];
  total_count: number;
}

interface Idata {
  data: IdataTypes;
  nextPage: number;
}

interface IpageTypes {
  pages: Idata[];
}

export interface repoListTypes {
  fetchNextPage: () => void;
  data: IpageTypes | undefined;
  hasNextPage: boolean | undefined;
}
