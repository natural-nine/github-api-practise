import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageValue } from "../recoil/atoms";
import { IpageChange, IuserData } from "../types/userListTypes";

const SearchUserList = ({
  usersData,
  saveUserClick,
  isSaveUserList,
  deleteUserClick,
}: IuserData) => {
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
  }, [usersData.total_count]);
  return (
    <React.Fragment>
      {usersData.items.map(i => (
        <UsersBox key={i.id}>
          <LeftBox>
            <img src={i.avatar_url} alt="img" />
            <p>{i.login}</p>
          </LeftBox>
          <RigthBox>
            {isSaveUserList.find(e => e.id === i.id) ? (
              <Btn
                style={{ backgroundColor: "#e74c3c" }}
                onClick={() => {
                  deleteUserClick(i.id);
                }}
              >
                Delete
              </Btn>
            ) : (
              <Btn
                onClick={() => {
                  saveUserClick(i.id, i.login, i.avatar_url);
                }}
              >
                Save
              </Btn>
            )}
          </RigthBox>
        </UsersBox>
      ))}
      <StylePagination
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
  box-shadow: ${props => props.theme.boxShadow};
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
    color: ${props => props.theme.textColor};
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
  background-color: ${props => props.theme.btnColor};
  color: ${props => props.theme.btnTextColor};
  cursor: pointer;
`;

const StylePagination = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 5px;
  color: red;
  margin-top: 2rem;
  margin-bottom: 10px;
  .page-num {
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 400;
  }
  .page-num:hover {
    background-color: ${props => props.theme.pagiBgColor};
    color: ${props => props.theme.pagiColor};
  }
  .active {
    background-color: ${props => props.theme.pagiBgColor};
  }
  a {
    color: ${props => props.theme.pagiColor};
  }
  /* .page-num:hover {
    background-color: ${props => props.theme.pagiBgColor};
    color: ${props => props.theme.pagiColor};
  }
  .active {
    background-color: ${props => props.theme.pagiBgcolor};
  } */
`;

export default SearchUserList;
