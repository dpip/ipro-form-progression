import React, { useContext } from "react";
import Navigation from "./components/Navigation";
import { useHistory } from "react-router-dom";

import { AppContext } from "./AppContext";

const Confirmation = (props) => {
  const history = useHistory();
  const [state] = useContext(AppContext);
  const handleSubmit = (e) => {
    alert(JSON.stringify(state, null, 2));
  };

  const toBooth = () => {
    history.push("/booth");
  };

  let answers = [state.q339, state.q340, state.q341];

  return (
    <div className={"container"}>
      <div className={"section"}>
        <h1>Confirmation</h1>
        <h4>Please review your information below</h4>
        <div>
          <p className={"blue"}>You heard about us from:</p>
          <ul>
            {answers.map((answer, index) => {
              return (
                <li className={`selected-${answer.selected}`} key={index}>
                  {answer.value}
                </li>
              );
            })}
          </ul>
          <div>
            <p className={"blue"}>Your email address:</p>
            <span>{state.q342.value}</span>
          </div>
          <div>
            <p className={"blue"}>Signed up for our news letter:</p>
            <span>{state.q343.value}</span>
          </div>
          <div>
            <p className={"blue"}>Entered our raffle:</p>
            <span>{!state.q344.selected ? "No" : "Yes"}</span>
          </div>
        </div>
        <div className={"confirmation-nav"}>
          <Navigation actionPrev={toBooth} prev={true} />
          <button type={"submit"} onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
