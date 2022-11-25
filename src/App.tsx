import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Save from "./pages/Save";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="save" element={<Save />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
