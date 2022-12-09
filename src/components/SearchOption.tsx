import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactSelect from "react-select";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchOption } from "../recoil/atoms";
import { optionTypes } from "../types/searchTypes";

const options = [
  { value: "Repository", label: "Repository" },
  { value: "User", label: "User" },
];

const SearchSelect = () => {
  const location = useLocation();
  const setOptionValue = useSetRecoilState(searchOption);
  const [isOptions, setIsOptions] = useState<any>(null);
  const handleChange = (e: optionTypes) => {
    if (e.value === "Repository") {
      setOptionValue(e.value);
    } else if (e.value === "User") {
      setOptionValue(e.value);
    }
  };
  return (
    <Wrap>
      {location.pathname === "/" && (
        <ReactSelect
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
