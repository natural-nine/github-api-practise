import React, { useCallback } from "react";
import styled from "styled-components";
import { IoptionTypes } from "../types/sortValueTypes";

const Optional = ({
  isOrderValue,
  setIsOrderValue,
  isSortValue,
  setIsSortValue,
}: IoptionTypes) => {
  const orderChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsOrderValue(event.target.value);
    },
    []
  );
  const sortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setIsSortValue(event.target.value);
    },
    []
  );
  return (
    <Wrap>
      <OrderBox>
        {!isSortValue ||
          (isSortValue !== "sort options" && (
            <>
              <input
                type="radio"
                value="desc"
                checked={isOrderValue === "desc"}
                onChange={orderChange}
              />
              <span>desc</span>
              <input
                type="radio"
                value="asc"
                checked={isOrderValue === "asc"}
                onChange={orderChange}
              />
              <span>asc</span>
            </>
          ))}
      </OrderBox>
      <SortBox>
        <select value={isSortValue || ""} onChange={sortChange}>
          <option value="sort options">sort options (best match)</option>
          <option value="stars">stars</option>
          <option value="forks">forks</option>
          <option value="help-wanted-issues">help-wanted-issues</option>
          <option value="updated">updated</option>
        </select>
      </SortBox>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderBox = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  input {
    margin: 0px 5px 0px 10px;
    font-size: 1rem;
    cursor: pointer;
  }
  span {
    font-size: 1.4rem;
    color: ${props => props.theme.textColor};
  }
`;
const SortBox = styled.div`
  width: 25%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  select {
    width: 75%;
    height: 90%;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 2px;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
  }
`;

export default Optional;
