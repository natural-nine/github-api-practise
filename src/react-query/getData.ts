import instance from "../axios/axios";
import { IdataTypes } from "../types/repoListTypes";
import { IuserDataTypes } from "../types/userListTypes";

export const getSearchData = async (
  pageParam: number,
  search: string,
  order: string,
  sort: string
) => {
  const { data } = await instance.get<IdataTypes>(
    `/search/repositories?q=${search}&page=${pageParam}&order=${order}&sort=${sort}`
  );
  return { data, nextPage: pageParam + 1 };
};

export const getUserData = async (currentPage: number, search: string) => {
  // await new Promise(r => setTimeout(r, 500));
  const { data } = await instance.get<IuserDataTypes>(
    `/search/users?q=${search}&page=${currentPage}&per_page=20`
  );
  return data;
};
