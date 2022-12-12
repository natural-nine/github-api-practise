import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrap>
      <h1>Sorry, an error has occurred</h1>
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
  background-color: ${props => props.theme.pageBoxColor};
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.textColor};
  }
`;

export default Error;
