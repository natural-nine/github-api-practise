import React from "react";
import styled from "styled-components";
import { FaSistrix, FaAlignJustify } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Sider = () => {
  const { pathname } = useLocation();
  return (
    <SideNav>
      <PageBar>
        <HomeBox props={pathname}>
          <NavLink to="/">
            <HomeIcon />
            <span>Go Home Page</span>
          </NavLink>
        </HomeBox>
        <SaveBox props={pathname}>
          <NavLink to="save">
            <SaveIcon />
            <span>Go Save Page</span>
            <span>0</span>
          </NavLink>
        </SaveBox>
      </PageBar>
    </SideNav>
  );
};

const SideNav = styled.section`
  /* display: flex;
  flex-direction: column; */
  min-height: 170px;
  width: 25%;
  padding: 50px 15px 0px 50px;
  border: 1px solid red;
`;

const PageBar = styled.div`
  width: 100%;
  height: 170px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 10px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 7px;
    border-radius: 15px;
    /* opacity: 0.7; */
    span {
      margin-left: 10px;
      font-size: 1.2rem;
    }
  }
`;

const HomeBox = styled.div<{ props: string }>`
  margin-bottom: 20px;
  background-color: ${props => props.props === "/" && "#f4f2ff"};
  box-shadow: ${props =>
    props.props === "/" && "0px 12px 42px rgba(0, 0, 0, 0.2)"};
  opacity: ${props => props.props !== "/" && "0.4"};
`;
const SaveBox = styled.div<{ props: string }>`
  background-color: ${props => props.props === "/save" && "#f4f2ff"};
  box-shadow: ${props =>
    props.props === "/save" && "0px 12px 42px rgba(0, 0, 0, 0.2)"};
  opacity: ${props => props.props !== "/save" && "0.4"};
  span:last-child {
    border-radius: 50%;
    padding: 3px;
    border: 1px solid red;
  }
`;

const HomeIcon = styled(FaSistrix)`
  font-size: 2rem;
`;
const SaveIcon = styled(FaAlignJustify)`
  font-size: 2rem;
`;

export default Sider;
