import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import { repoListTypes } from "../types/repoListTypes";
import { FaRegStar, FaRegCircle } from "react-icons/fa";
import { getCreateDate, getCreateLanColor } from "../utils/repoLists";

const SearchRepoList = ({
  data,
  hasNextPage,
  fetchNextPage,
  saveRepoClick,
  isSaveRepoList,
  deleteRepoClick,
}: repoListTypes) => {
  return (
    <React.Fragment>
      {data?.pages.map(pageData =>
        pageData.data.items.map(i => (
          <RepoBox key={i.id}>
            <LeftBox>
              <div>
                <p>{i.owner.login}&nbsp;/</p>
                <p>&nbsp;{i.name}</p>
              </div>
              <div>
                <span>{i.description}</span>
              </div>
              <div>
                <StarIcon />
                <span>{i.stargazers_count}</span>
                {i.language && (
                  <React.Fragment>
                    <CircleIcon props={getCreateLanColor(i.language)} />
                    <span>{i.language}</span>
                  </React.Fragment>
                )}
                <span>Updated {getCreateDate(i.updated_at)}</span>
              </div>
            </LeftBox>
            <RigthBox>
              {isSaveRepoList.find(e => e.id === i.id) ? (
                <Btn
                  style={{ backgroundColor: "#e74c3c" }}
                  onClick={() => {
                    deleteRepoClick(i.id);
                  }}
                >
                  Delete
                </Btn>
              ) : (
                <Btn
                  onClick={() => {
                    saveRepoClick(
                      i.id,
                      i.language,
                      i.name,
                      i.owner.login,
                      i.description,
                      i.stargazers_count,
                      i.updated_at
                    );
                  }}
                >
                  Save
                </Btn>
              )}
            </RigthBox>
          </RepoBox>
        ))
      )}
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage} />
    </React.Fragment>
  );
};

const RepoBox = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: ${props => props.theme.boxShadow};
`;

const LeftBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  div {
    display: flex;
    width: 100%;
    height: 30px;
    span {
      font-size: 1.3rem;
      color: ${props => props.theme.textColor};
    }
    p {
      font-size: 1.5rem;
      color: ${props => props.theme.textColor};
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  div:last-child {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    span {
      margin-right: 10px;
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }
`;

const StarIcon = styled(FaRegStar)`
  margin: 0px 3px 2.3px 0px;
  opacity: 0.7;
  color: ${props => props.theme.starColor};
`;
const CircleIcon = styled(FaRegCircle)<{ props: string }>`
  margin: 0px 3px 2px 0px;
  color: ${props => props.props};
  background-color: ${props => props.props};
  border-radius: 50%;
`;

const RigthBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 70%;
  height: 50px;
  font-size: 1.7rem;
  border-radius: 15px;
  border: none;
  background-color: ${props => props.theme.btnColor};
  color: ${props => props.theme.btnTextColor};
  cursor: pointer;
`;

export default SearchRepoList;
