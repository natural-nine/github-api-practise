import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { pageValue } from "../recoil/atoms";
import "../styles/pagination.css";
import {
  IpageChange,
  IuserDataTypes,
  userListTypes,
} from "../types/userListTypes";

const SearchUserList = ({ usersData }: { usersData: IuserDataTypes }) => {
  const [isPageCount, setIsPageCount] = useState<number>(0);

  const [isCurrentPage, setIsCurrentPage] = useRecoilState(pageValue);

  const handlePageChange = (event: IpageChange) => {
    setIsCurrentPage(event.selected + 1);
  };
  useEffect(() => {
    if (usersData.total_count > 1000) {
      setIsPageCount(50);
    } else {
      setIsPageCount(Math.ceil(usersData.total_count / 20));
    }
  }, []);
  return (
    <React.Fragment>
      {usersData.items.map(i => (
        <UsersBox key={i.id}>
          <LeftBox>
            <img src={i.avatar_url} alt="img" />
            <p>{i.login}</p>
          </LeftBox>
          <RigthBox>
            <Btn>Save</Btn>
          </RigthBox>
        </UsersBox>
      ))}
      <ReactPaginate
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        disableInitialCallback
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        pageCount={isPageCount}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        forcePage={isCurrentPage - 1}
      />
    </React.Fragment>
  );
};

const UsersBox = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
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
    margin-right: 5px;
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
  background-color: #0984e3;
  color: #fff;
  cursor: pointer;
`;

export default SearchUserList;
