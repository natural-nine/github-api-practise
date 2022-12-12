import React from "react";
import styled from "styled-components";
import { FaRegStar, FaRegCircle } from "react-icons/fa";
import { IsaveList } from "../types/repoListTypes";
import { getCreateDate, getCreateLanColor } from "../utils/repoLists";
import EmptyData from "./EmptyData";

const SaveRepoList = ({ isSaveRepoList, deleteRepoClick }: IsaveList) => {
  return (
    <Wrap>
      {isSaveRepoList.length >= 1 ? (
        <React.Fragment>
          {isSaveRepoList.map(i => (
            <RepoBox key={i.id}>
              <LeftBox>
                <div>
                  <p>{i.login}&nbsp;/</p>
                  <p>&nbsp;{i.name}</p>
                </div>
                <div>
                  <span>{i.description}</span>
                </div>
                <div>
                  <StarIcon />
                  <span>{i.targazers_count}</span>
                  <CircleIcon props={getCreateLanColor(i.language)} />
                  <span>{i.language}</span>
                  <span>Updated {getCreateDate(i.updated_at)}</span>
                </div>
              </LeftBox>
              <RigthBox>
                <Btn
                  onClick={() => {
                    deleteRepoClick(i.id);
                  }}
                >
                  Delete
                </Btn>
              </RigthBox>
            </RepoBox>
          ))}
        </React.Fragment>
      ) : (
        <EmptyData />
      )}
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
  /* background-color: #fff; */
`;

const RepoBox = styled.div`
  width: 100%;
  height: 150px;
  margin: 10px 0px;
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
  background-color: #e74c3c;
  color: #fff;
  cursor: pointer;
`;
export default SaveRepoList;
