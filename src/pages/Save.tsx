import React, { useState } from "react";
import styled from "styled-components";

type tabTypes = {
  [key: string]: boolean;
  tabRepo: boolean;
  tabUser: boolean;
};

const Save = () => {
  const [tabState, setTabState] = useState({ tabRepo: true, tabUser: false });
  const tabClick = (e: React.MouseEvent<HTMLElement>) => {
    const newTabState: tabTypes = { ...tabState };
    const activeTab = e.currentTarget.id;
    for (let key in newTabState) {
      key === activeTab
        ? (newTabState[key] = true)
        : (newTabState[key] = false);
    }
    setTabState(newTabState);
  };
  console.log(tabState);
  return (
    <Wrap>
      <TabBox>
        <h1 id="tabRepo" onClick={tabClick}>
          Repo
        </h1>
        <h1 id="tabUser" onClick={tabClick}>
          User
        </h1>
      </TabBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 75%;
  padding: 50px 25px 0px;
  display: flex;
  flex-direction: column;
`;

const TabBox = styled.div`
  width: 100%;
  display: flex;
`;
export default Save;
