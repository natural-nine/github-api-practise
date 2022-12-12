import React from "react";
import styled from "styled-components";

const EmptyData = () => {
  return (
    <Wrap>
      <h1>We couldn’t find any dates</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 250px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
`;

export default EmptyData;
