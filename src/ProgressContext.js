import React, { useState } from "react";
import formData from "./data/form.json";

const ProgressContext = React.createContext([{}, () => {}]);

const ProgressProvider = (props) => {
  console.log(formData);
  const [progress, setProgress] = useState(0);
  return (
    <ProgressContext.Provider value={[progress, setProgress]}>
      {props.children}
    </ProgressContext.Provider>
  );
};

export { ProgressContext, ProgressProvider };
