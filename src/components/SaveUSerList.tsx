import React from "react";
import styled from "styled-components";
import { IsaveUserList } from "../types/userListTypes";
import EmptyData from "./EmptyData";

const SaveUserList = ({ isSaveUserList, deleteUserClick }: IsaveUserList) => {
  return (
    <Wrap>
      {isSaveUserList.length >= 1 ? (
        <React.Fragment>
          {isSaveUserList.map(i => (
            <UsersBox key={i.id}>
              <LeftBox>
                <img src={i.avatar_url} alt="img" />
                <p>{i.login}</p>
              </LeftBox>
              <RigthBox>
                <Btn
                  onClick={() => {
                    deleteUserClick(i.id);
                  }}
                >
                  Delete
                </Btn>
              </RigthBox>
            </UsersBox>
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
  /* margin: 10px 0px; */
  background-color: #fff;
`;
const UsersBox = styled.div`
  width: 100%;
  height: 80px;
  margin: 10px 0px;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 12px 42px rgba(0, 0, 0, 0.2);
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    font-size: 1.5rem;
  }
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
export default SaveUserList;
