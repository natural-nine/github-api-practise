import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInfiniteQuery, useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  orderingValue,
  pageValue,
  searchRepoValue,
  searchUserValue,
  sortValue,
} from "../recoil/atoms";
import SearchRepoList from "../components/SearchRepoList";
import Loading from "../components/Loading";
import Optional from "../components/Optional";
import SearchUserList from "../components/SearchUserList";
import { getSearchData, getUserData } from "../react-query/getData";
import { IsaveRepo } from "../types/repoListTypes";
import { IsaveUser } from "../types/userListTypes";

const Home = () => {
  const isCurrentPage = useRecoilValue(pageValue);
  const isSearchRepoValue = useRecoilValue(searchRepoValue);
  const isSearchUserValue = useRecoilValue(searchUserValue);
  const [isOrderValue, setIsOrderValue] = useRecoilState(orderingValue);
  const [isSortValue, setIsSortValue] = useRecoilState(sortValue);

  const [isSaveRepoList, setIsSaveRepoList] = useState<IsaveRepo[]>([]);
  const [isSaveUserList, setIsSaveUserList] = useState<IsaveUser[]>([]);

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["repoData", isSearchRepoValue, isOrderValue, isSortValue],
      ({ pageParam = 1 }) =>
        getSearchData(pageParam, isSearchRepoValue, isOrderValue, isSortValue),
      {
        getNextPageParam: (lastPage, allPages) => {
          const maxPages = lastPage.data.total_count / 30;
          const nextPage = allPages.length + 1;
          return nextPage <= maxPages ? nextPage : undefined;
        },
        enabled: !!isSearchRepoValue,
        refetchOnWindowFocus: false,
      }
    );

  const { data: usersData, isLoading: usersLoading } = useQuery(
    ["users", isSearchUserValue, isCurrentPage],
    () => getUserData(isCurrentPage, isSearchUserValue),
    {
      refetchOnWindowFocus: false,
      enabled: !!isSearchUserValue,
    }
  );
  useEffect(() => {
    const repoData: any = localStorage.getItem("repoKey");
    const userData: any = localStorage.getItem("userKey");
    if (repoData || userData) {
      setIsSaveRepoList(JSON.parse(repoData));
      setIsSaveUserList(JSON.parse(userData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("repoKey", JSON.stringify(isSaveRepoList));
    localStorage.setItem("userKey", JSON.stringify(isSaveUserList));
  }, [isSaveRepoList, isSaveUserList]);
  const saveRepoClick = (
    id: number,
    language: string,
    name: string,
    login: string,
    description: string,
    targazers_count: number
  ) => {
    const listData = {
      id,
      language,
      name,
      login,
      description,
      targazers_count,
    };
    setIsSaveRepoList(prev => [...prev, listData]);
  };
  const saveUserClick = (id: number, login: string, avatar_url: string) => {
    const listData = {
      id,
      login,
      avatar_url,
    };
    setIsSaveUserList(prev => [...prev, listData]);
  };
  const deleteRepoClick = (id: number) => {
    setIsSaveRepoList(isSaveRepoList.filter(i => i.id !== id));
  };
  const deleteUserClick = (id: number) => {
    setIsSaveUserList(isSaveUserList.filter(i => i.id !== id));
  };

  return (
    <Wrap>
      {isLoading && !isFetching && <Loading />}
      {data && (
        <React.Fragment>
          <Optional
            isOrderValue={isOrderValue}
            setIsOrderValue={setIsOrderValue}
            isSortValue={isSortValue}
            setIsSortValue={setIsSortValue}
          />
          <SearchRepoList
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            saveRepoClick={saveRepoClick}
            isSaveRepoList={isSaveRepoList}
            deleteRepoClick={deleteRepoClick}
          />
        </React.Fragment>
      )}
      {isFetching && <Loading />}
      {usersLoading && <Loading />}
      {usersData && (
        <SearchUserList
          usersData={usersData}
          saveUserClick={saveUserClick}
          isSaveUserList={isSaveUserList}
          deleteUserClick={deleteUserClick}
        />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 75%;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
`;

export default Home;
