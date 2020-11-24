import "./App.css";

import React, { useState } from "react";

import Welcome from "./Welcome";
import Booth from "./Booth";
import Confirmation from "./Confirmation";
import Progress from "./components/Progress";

import { Route, Redirect } from "react-router-dom";

import { AppProvider } from "./AppContext.js";
import { ProgressProvider } from "./ProgressContext.js";

import "./styles/styles.scss";

const App = (props) => {
  return (
    <AppProvider>
      <ProgressProvider>
        <div className="App">
          <Progress />
          <Redirect to="/" />
          <Route exact path={"/"}>
            <Welcome {...props} />
          </Route>
          <Route exact path={"/booth"}>
            <Booth {...props} />
          </Route>
          <Route exact path={"/confirmation"}>
            <Confirmation {...props} />
          </Route>
        </div>
      </ProgressProvider>
    </AppProvider>
  );
};

export default App;
