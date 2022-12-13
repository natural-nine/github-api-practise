import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactSelect, { ActionMeta, StylesConfig } from "react-select";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchOption } from "../recoil/atoms";
import { optionTypes } from "../types/searchTypes";

const options: optionTypes[] = [
  { value: "Repository", label: "Repository" },
  { value: "User", label: "User" },
];
const SearchSelect = () => {
  const location = useLocation();
  const setOptionValue = useSetRecoilState(searchOption);
  const [isOptions, setIsOptions] = useState<any>(null);
  const handleChange = (
    option: optionTypes | null,
    actionMeta: ActionMeta<optionTypes>
  ) => {
    if (option?.value === "Repository") {
      setOptionValue(option.value);
    } else if (option?.value === "User") {
      setOptionValue(option.value);
    }
  };
  return (
    <Wrap>
      {location.pathname === "/" && (
        <ReactSelect
          className="select"
          defaultValue={isOptions}
          options={options}
          onChange={handleChange}
          minMenuHeight={75}
          maxMenuHeight={80}
        />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 20%;
`;

export default SearchSelect;
