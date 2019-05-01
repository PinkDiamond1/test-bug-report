import React from "react";
import * as X from "./X";
import * as Z from "./Z";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid red;
  background-color: green;
  margin: 20px;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
        <StyledDiv>blablabla</StyledDiv>
    </div>
  );
}

export default App;
