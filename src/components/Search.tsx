import React from "react";
import styled from "styled-components";
import { SearchTypes } from "../types/searchTypes";
const Search = ({ searchRef, submitClick }: SearchTypes) => {
  return (
    <SearchBox>
      <SearchInput
        ref={searchRef}
        placeholder="Search Github Repositories or Users"
      />
      <Btn onClick={submitClick}>Search</Btn>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

const SearchInput = styled.input`
  width: 77%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 15px;
  font-size: 2.2rem;
  opacity: 0.6;
`;
const Btn = styled.button`
  width: 18%;
  height: 100%;
  font-size: 1.7rem;
  border-radius: 15px;
  border: none;
  background-color: #0984e3;
  color: #fff;
  cursor: pointer;
`;

export default Search;
