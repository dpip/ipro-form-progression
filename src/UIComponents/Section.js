import React from "react";

// Freeform Text

const Section = (props) => {
  console.log("section props");
  return (
    <div className={"section"} {...props}>
      {props.children}
    </div>
  );
};

export default Section;
