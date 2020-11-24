import React from "react";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className={"container-navigation"}>
      <div className={"nav-selector-wrap"}>
        {props.prev ? (
          <button onClick={(e) => props.actionPrev(e, 0)}>previous</button>
        ) : null}
      </div>
      <div className={"nav-selector-wrap"}>
        {props.next ? (
          <button className={"btn-pri"} onClick={(e) => props.actionNext(e, 1)}>
            next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
