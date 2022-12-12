import React, { useState } from "react";
import styled from "styled-components";
import SaveRepoList from "../components/SaveRepoList";
import SaveUserList from "../components/SaveUSerList";

type tabTypes = {
  [key: string]: boolean;
  tabRepo: boolean;
  tabUser: boolean;
};

const Save = () => {
  const [tabState, setTabState] = useState<tabTypes>({
    tabRepo: true,
    tabUser: false,
  });
  const tabClick = (e: React.MouseEvent<HTMLElement>) => {
    const newTabState = { ...tabState };
    const activeTab = e.currentTarget.id;
    for (let key in newTabState) {
      key === activeTab
        ? (newTabState[key] = true)
        : (newTabState[key] = false);
    }
    setTabState(newTabState);
  };
  return (
    <Wrap>
      <TabBox>
        <RepoBox id="tabRepo" onClick={tabClick} props={tabState.tabRepo}>
          <p>Repositories</p>
        </RepoBox>
        <UserBox id="tabUser" onClick={tabClick} props={tabState.tabUser}>
          <p>Users</p>
        </UserBox>
      </TabBox>
      {tabState.tabRepo && <SaveRepoList />}
      {tabState.tabUser && <SaveUserList />}
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 75%;
  padding: 50px 25px 0px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.5rem;
  }
`;

const TabBox = styled.div`
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
      color: #494d50;
    }
  }
`;
const RepoBox = styled.div<{ props: boolean }>`
  width: 100%;
  background-color: ${props => props.props && "white"};
  border-left: ${props => !props.props && "1px solid #ecf0f1"};
  border-top: ${props => !props.props && "1px solid #ecf0f1"};
  border-top: ${props => props.props && "3.5px solid #6d50ff"};
`;
const UserBox = styled.div<{ props: boolean }>`
  width: 100%;
  border-top: ${props => props.props && "3.5px solid #6d50ff"};
  background-color: ${props => props.props && "white"};
  border-top: ${props => !props.props && "1px solid #ecf0f1"};
  border-right: ${props => !props.props && "1px solid #ecf0f1"};
`;

export default Save;
