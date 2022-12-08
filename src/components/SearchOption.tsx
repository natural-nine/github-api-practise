import React, { useState } from "react";
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
      <ReactSelect
        defaultValue={isOptions}
        options={options}
        onChange={handleChange}
        minMenuHeight={75}
        maxMenuHeight={80}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 20%;
`;

export default SearchSelect;
