import React, { useRef } from "react";
import styled from "styled-components";
import Search from "./Search";
import ThemeMode from "./ThemeMode";
import { FaGithub } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  pageValue,
  searchOption,
  searchRepoValue,
  searchUserValue,
} from "../recoil/atoms";
import SearchSelect from "./SearchOption";

const Header = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setIsRepoSearch = useSetRecoilState(searchRepoValue);
  const setIsUserSearch = useSetRecoilState(searchUserValue);
  const isOptionValue = useRecoilValue(searchOption);
  const setIsCurrentPage = useSetRecoilState(pageValue);
  const submitClick = () => {
    if (isOptionValue === "Repository") {
      setIsUserSearch("");
      setIsRepoSearch(searchRef.current!.value);
    } else if (isOptionValue === "User") {
      setIsCurrentPage(1);
      setIsRepoSearch("");
      setIsUserSearch(searchRef.current!.value);
    }
  };
  return (
    <Wrap>
      <IconBox>
        <GithubIcon />
      </IconBox>
      <SearchThemeBox>
        <SearchSelect />
        <Search searchRef={searchRef} submitClick={submitClick} />
        <ThemeMode />
      </SearchThemeBox>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background-color: ${props => props.theme.headerColor};
`;

const IconBox = styled.div`
  width: 10%;
  height: 85%;
`;

const GithubIcon = styled(FaGithub)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.iconColor};
`;

const SearchThemeBox = styled.div`
  width: 65%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
