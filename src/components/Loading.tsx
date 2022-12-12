import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Box>
      <SpinnerBox />
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 30px;
    font-weight: 700;
    font-size: 2.1rem;
  }
`;
const SpinnerBox = styled.div`
  width: 6rem;
  height: 6rem;
  border: 15px solid rgba(163, 151, 198, 0.2);
  border-top: 15px solid rgba(163, 151, 198, 1);
  border-radius: 50%;
  background-color: #ecf0f1;
  animation: spinner 1s linear infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
