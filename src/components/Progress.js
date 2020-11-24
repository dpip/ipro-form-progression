import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

const Progress = (props) => {
  const [state, setState] = useContext(AppContext);
  return (
    <div className={"container container-progress"}>
      <div
        className={"progress-fill"}
        style={{
          width: `${Math.floor((state.progress / 4) * 100)}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
