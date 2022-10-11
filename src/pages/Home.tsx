import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import instance from "../shared/axios";

const Home = () => {
  interface repoData {
    id: number;
    created_at: string;
  }
  const [isSearch, setIsSearch] = useState("react");
  const getQuery = async () => {
    const { data } = await instance.get(
      `/search/repositories?q=${isSearch}&per_page=100&page=${1}`
    );
    return {
      data,
      //   nextPage: pageParams + 1,
    };
  };
  const { data, isLoading } = useInfiniteQuery(
    ["repo", isSearch],
    async ({ pageParam = 1 }) => {
      return await getQuery();
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      enabled: !!isSearch,
      // getNextPageParam: (lastPage) => {
      //   return lastPage.nextPage;
      // },
    }
  );
  console.log(isLoading);
  console.log(data);
  return <Wrap>Home Page</Wrap>;
};


const Wrap = styled.div`
    width: 75%;
    margin: auto;
    background-color: red;

`
export default Home;
