import React, { useState } from "react";
import styled from "styled-components";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import "../styles/switch.css";
import useToggle from "../hooks/useToggle";

const ThemeMode = () => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <ThemeBox>
      <SunIcon toggle={toggle} />
      <label className="toggle-switch">
        <input type="checkbox" checked={toggle} onChange={() => setToggle()} />
        <span className="switch" />
      </label>
      <MoonIcon toggle={toggle} />
    </ThemeBox>
  );
};

const ThemeBox = styled.div`
  width: 120px;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ThemeMode;
