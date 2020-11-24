import React, { useContext } from "react";
import { AppContext } from "../AppContext";

// True / False checkbox

const CB = (props) => {
  const [state, setState] = useContext(AppContext);

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
    console.log(name, value, checked);
  };

  return (
    <div className={"option"} key={props.index} className={"ui-component cb"}>
      <input
        type={"checkbox"}
        name={`q${props.block.QuestionID}`}
        value={props.block.Label}
        onChange={(e) => handleChange(e)}
        required
      ></input>
      <label>{props.block.Label}</label>
    </div>
  );
};

export default CB;
