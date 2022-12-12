import React from "react";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Sider from "./components/Sider";
import useToggle from "./hooks/useToggle";
import Home from "./pages/Home";
import Save from "./pages/Save";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [toggle, setToggle] = useToggle(false);
  return (
    <React.Fragment>
      <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Center>
          <Sider />
          <Routes>
            <Route path="/" element={<Home toggle={toggle} />} />
            <Route path="/save" element={<Save toggle={toggle} />} />
          </Routes>
        </Center>
      </ThemeProvider>
    </React.Fragment>
  );
}

const Center = styled.div`
  height: auto;
  display: flex;
  background-color: ${props => props.theme.bgColor};
`;

export default App;
