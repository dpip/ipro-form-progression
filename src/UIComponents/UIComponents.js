import React from "react";

import CB from "./CB";
import LB from "./LB";
import TB from "./TB";
import RBIL from "./RBIL";

const Components = {
  cb: CB,
  lb: LB,
  tb: TB,
  rbil: RBIL,
};

export default (block) => {
  if (typeof Components[block.UI] !== "undefined") {
    console.log("testing block", block);
    return React.createElement(Components[block.UI], {
      key: block._uid,
      block: block,
    });
  }

  return React.createElement(
    () => <div>The component {block.UI} has not been created yet.</div>,
    { key: block._uid }
  );
};
