import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Home from "./pages/Home";
import Save from "./pages/Save";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Center>
        <Sider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
        </Routes>
      </Center>
    </React.Fragment>
  );
}

const Center = styled.div`
  height: auto;
  display: flex;
  /* flex-direction: row; */
`;

export default App;
