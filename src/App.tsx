import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Save from "./pages/Save";

function App() {
  const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: #2c3e50; */
}
body {
box-sizing: border-box;
}
`;
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="save" element={<Save />} />
      </Routes>
    </>
  );
}

export default App;
