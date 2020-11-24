import React, { useState } from "react";
import formData from "./data/form.json";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  console.log(formData);
  const [state, setState] = useState({
    q339: {
      selected: false,
      value: null,
    },
    q340: {
      selected: false,
      value: null,
    },
    q341: {
      selected: false,
      value: null,
    },
    q342: {
      type: null,
      value: null,
    },
    q343: {
      selected: false,
      value: null,
    },
    q344: {
      selected: false,
      value: null,
    },
    pageData: formData,
    progress: 0,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
