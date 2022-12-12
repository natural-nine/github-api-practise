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
          </NavLink>
        </SaveBox>
      </PageBar>
    </SideNav>
  );
};

const SideNav = styled.section`
  min-height: 170px;
  min-width: 25%;
  padding: 50px 15px 0px 50px;
`;

const PageBar = styled.div`
  width: 100%;
  height: 170px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.pageBoxColor};
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 7px;
    border-radius: 15px;
    span {
      margin-left: 10px;
      font-size: 1.5rem;
      color: ${props => props.theme.textColor};
    }
  }
`;

const HomeBox = styled.div<{ props: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${props =>
    props.props === "/" && props.theme.pageInnerColor};
  box-shadow: ${props =>
    props.props === "/" && "0px 12px 42px rgba(0, 0, 0, 0.2)"};
  opacity: ${props => props.props !== "/" && "0.4"};
`;
const SaveBox = styled.div<{ props: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.props === "/save" && props.theme.pageInnerColor};
  box-shadow: ${props =>
    props.props === "/save" && "0px 12px 42px rgba(0, 0, 0, 0.2)"};
  opacity: ${props => props.props !== "/save" && "0.4"};
`;

const HomeIcon = styled(FaSistrix)`
  color: ${props => props.theme.textColor};
  font-size: 1.3rem;
`;
const SaveIcon = styled(FaAlignJustify)`
  color: ${props => props.theme.textColor};
  font-size: 1.3rem;
`;

export default Sider;
