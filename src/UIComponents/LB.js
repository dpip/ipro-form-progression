import React from "react";

// Read-Only Text

const LB = (props) => {
  return <h3 key={props.index}>{props.block.Label}</h3>;
};

export default LB;
