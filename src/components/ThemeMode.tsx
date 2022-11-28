import React, { useState } from "react";
import styled from "styled-components";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import "../styles/switch.css";

const ThemeMode = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const onToggle = (): void => {
    setIsToggled(!isToggled);
  };
  return (
    <ThemeBox>
      <SunIcon isToggled={isToggled} />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <MoonIcon isToggled={isToggled} />
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
