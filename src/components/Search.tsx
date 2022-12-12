import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SearchTypes } from "../types/searchTypes";
const Search = ({ searchRef, submitClick }: SearchTypes) => {
  const location = useLocation();
  return (
    <SearchBox>
      {location.pathname === "/" && (
        <React.Fragment>
          <SearchInput
            ref={searchRef}
            placeholder="Search Github Repositories or Users"
          />
          <Btn onClick={submitClick}>Search</Btn>
        </React.Fragment>
      )}
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
  border: 0.1px solid gray;
  border-radius: 15px;
  padding: 15px;
  font-size: 1.5rem;
  background-color: ${props => props.theme.pageBoxColor};
  color: ${props => props.theme.textColor};
`;
const Btn = styled.button`
  width: 18%;
  height: 100%;
  font-size: 1.7rem;
  border-radius: 15px;
  border: none;
  background-color: ${props => props.theme.btnColor};
  color: ${props => props.theme.btnTextColor};
  cursor: pointer;
`;

export default Search;
