import React, { useState } from "react";
import MainframeSDK from "@mainframe/sdk";
import Web3 from "web3";
import { Formik } from "formik";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid red;
  background-color: green;
  margin: 20px;
  padding: 20px;
`;

const StyledPaper = styled.div`
  margin: 20px;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StyledDiv>blablabla</StyledDiv>
        <Paper component={StyledPaper}>
          <Typography variant="h3">bobobo</Typography>
        </Paper>
      </header>
    </div>
  );
}

export default App;
