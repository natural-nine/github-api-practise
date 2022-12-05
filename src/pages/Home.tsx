import React from "react";
import styled from "styled-components";
import instance from "../axios/axios";
import { useInfiniteQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { orderingValue, searchValue, sortValue } from "../recoil/atoms";
import SearchRepoList from "../components/SearchRepoList";
import Loading from "../components/Loading";
import { IdataTypes } from "../types/repoListTypes";
import Optional from "../components/Optional";

const Home = () => {
  const isSearchValue = useRecoilValue(searchValue);
  const [isOrderValue, setIsOrderValue] = useRecoilState(orderingValue);
  const [isSortValue, setIsSortValue] = useRecoilState(sortValue);
  const getSearchData = async (pageParam: number) => {
    const { data } = await instance.get<IdataTypes>(
      `/search/repositories?q=${isSearchValue}&page=${pageParam}&order=${isOrderValue}&sort=${isSortValue}`
    );
    return { data, nextPage: pageParam + 1 };
  };
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["repoData", isSearchValue, isOrderValue, isSortValue],
      ({ pageParam = 1 }) => getSearchData(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          // console.log(allPages);
          const maxPages = lastPage.data.total_count / 30;
          const nextPage = allPages.length + 1;
          return nextPage <= maxPages ? nextPage : undefined;
        },
        enabled: !!isSearchValue,
        refetchOnWindowFocus: false,
      }
    );
  return (
    <Wrap>
      {isLoading && !isFetching && <Loading />}
      {/* {data && isSortValue && (
        <Optional
          isOrderValue={isOrderValue}
          setIsOrderValue={setIsOrderValue}
          isSortValue={isSortValue}
          setIsSortValue={setIsSortValue}
        />
      )} */}
      {/* <Optional
        isOrderValue={isOrderValue}
        setIsOrderValue={setIsOrderValue}
        isSortValue={isSortValue}
        setIsSortValue={setIsSortValue}
      /> */}
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
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
`;

export default Home;
