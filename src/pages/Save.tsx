import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SaveRepoList from "../components/SaveRepoList";
import SaveUserList from "../components/SaveUSerList";
import { IsaveRepo } from "../types/repoListTypes";
import { IsaveUser } from "../types/userListTypes";

type tabTypes = {
  [key: string]: boolean;
  tabRepo: boolean;
  tabUser: boolean;
};

const Save = ({ toggle }: { toggle: boolean }) => {
  const [tabState, setTabState] = useState<tabTypes>({
    tabRepo: true,
    tabUser: false,
  });
  const [isSaveRepoList, setIsSaveRepoList] = useState<IsaveRepo[]>([]);
  const [isSaveUserList, setIsSaveUserList] = useState<IsaveUser[]>([]);

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
  useEffect(() => {
    const repoData = localStorage.getItem("repoKey");
    const userData = localStorage.getItem("userKey");
    if (repoData) {
      setIsSaveRepoList(JSON.parse(repoData));
    }
    if (userData) {
      setIsSaveUserList(JSON.parse(userData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("repoKey", JSON.stringify(isSaveRepoList));
    localStorage.setItem("userKey", JSON.stringify(isSaveUserList));
  }, [isSaveRepoList, isSaveUserList]);

  const deleteRepoClick = (id: number) => {
    setIsSaveRepoList(isSaveRepoList.filter(i => i.id !== id));
  };
  const deleteUserClick = (id: number) => {
    setIsSaveUserList(isSaveUserList.filter(i => i.id !== id));
  };
  return (
    <Wrap>
      <TabBox>
        <RepoBox id="tabRepo" onClick={tabClick} props={tabState.tabRepo}>
          <p>Repositories ({isSaveRepoList.length})</p>
        </RepoBox>
        <UserBox id="tabUser" onClick={tabClick} props={tabState.tabUser}>
          <p>Users ({isSaveUserList.length})</p>
        </UserBox>
      </TabBox>
      {tabState.tabRepo && (
        <SaveRepoList
          isSaveRepoList={isSaveRepoList}
          deleteRepoClick={deleteRepoClick}
        />
      )}
      {tabState.tabUser && (
        <SaveUserList
          isSaveUserList={isSaveUserList}
          deleteUserClick={deleteUserClick}
        />
      )}
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 75%;
  padding: 50px 25px 0px;
  display: flex;
  flex-direction: column;
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
    /* background-color: ${props => props.theme.bgColor}; */
    p {
      font-size: 1.5rem;
      color: ${props => props.theme.textColor};
    }
  }
`;
const RepoBox = styled.div<{ props: boolean }>`
  width: 100%;
  background-color: ${props => props.props && props.theme.pageBoxColor};
  border-left: ${props => !props.props && props.theme.borderColor};
  border-top: ${props => !props.props && props.theme.borderColor};
  border-top: ${props => props.props && "3.5px solid #6d50ff"};
`;
const UserBox = styled.div<{ props: boolean }>`
  width: 100%;
  background-color: ${props => props.props && props.theme.pageBoxColor};
  border-top: ${props => !props.props && props.theme.borderColor};
  border-right: ${props => !props.props && props.theme.borderColor};
  border-top: ${props => props.props && "3.5px solid #6d50ff"};
`;

export default Save;
