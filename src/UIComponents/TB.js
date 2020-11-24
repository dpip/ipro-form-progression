import React, { useContext } from "react";
import { AppContext } from "../AppContext";

// Freeform Text

const TB = (props) => {
  const [state, setState] = useContext(AppContext);
  console.log("tb props", props);

  const handleChange = (e) => {
    const {
      target: { name, type, value },
    } = e;
    setState({
      ...state,
      [name]: {
        type: type,
        value: value,
      },
    });
  };
  return (
    <div key={props.index} className={"option"}>
      <h5>{props.block.Label}</h5>
      <label>
        <input
          type="email"
          name={`q${props.block.QuestionID}`}
          value={state.email}
          onChange={(e) => handleChange(e)}
          placeholder={"your@email.com"}
          required
        />
      </label>
    </div>
  );
};

export default TB;
