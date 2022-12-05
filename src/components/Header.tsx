import React, { useRef } from "react";
import styled from "styled-components";
import moonLine from "../assets/images/test.png";
import Search from "./Search";
import ThemeMode from "./ThemeMode";
import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { searchValue } from "../recoil/atoms";

const Header = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setIsSearch = useSetRecoilState(searchValue);
  const submitClick = () => {
    setIsSearch(searchRef.current!.value);
  };
  return (
    <Wrap>
      <IconBox>
        <GithubIcon />
      </IconBox>
      <SearchThemeBox>
        <Search searchRef={searchRef} submitClick={submitClick} />
        <ThemeMode />
      </SearchThemeBox>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 80px;
  /* background-color: #34495e; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background-color: #fff;
  border-bottom: 2px solid #f6f9fa;
`;

const IconBox = styled.div`
  width: 10%;
  height: 85%;
`;

const GithubIcon = styled(FaGithub)`
  width: 100%;
  height: 100%;
`;

const SearchThemeBox = styled.div`
  width: 60%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
