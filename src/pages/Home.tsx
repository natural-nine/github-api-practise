import React from "react";
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

const Home = () => {
  const isCurrentPage = useRecoilValue(pageValue);
  const isSearchRepoValue = useRecoilValue(searchRepoValue);
  const isSearchUserValue = useRecoilValue(searchUserValue);
  const [isOrderValue, setIsOrderValue] = useRecoilState(orderingValue);
  const [isSortValue, setIsSortValue] = useRecoilState(sortValue);

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
  return (
    <Wrap>
      {/* <Optional
        isOrderValue={isOrderValue}
        setIsOrderValue={setIsOrderValue}
        isSortValue={isSortValue}
        setIsSortValue={setIsSortValue}
      /> */}
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
          />
        </React.Fragment>
      )}
      {isFetching && <Loading />}
      {usersLoading && <Loading />}
      {usersData && <SearchUserList usersData={usersData} />}
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
