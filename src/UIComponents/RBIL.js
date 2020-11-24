import React, { useContext } from "react";
import { AppContext } from "../AppContext";

// Mutual Exclusive Selection Radio Buttons. See Options properties.

const RBIL = (props) => {
  const [state, setState] = useContext(AppContext);
  console.log("rbil props", props);

  const handleChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;
    setState({
      ...state,
      [name]: {
        selected: checked,
        value: value,
      },
    });
  };
  return (
    <div key={props.index}>
      <h5>{props.block.Label}</h5>
      {props.block.Options.map((option, index) => {
        return (
          <label key={index} className="radio-inline">
            <input
              type="radio"
              value={option.Description}
              name={`q${props.block.QuestionID}`}
              onChange={(e) => handleChange(e)}
              required
            />
            {option.Description}
          </label>
        );
      })}
    </div>
  );
};

export default RBIL;
