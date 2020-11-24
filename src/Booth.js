import React, { useContext } from "react";
import { AppContext } from "./AppContext";

import { useHistory } from "react-router-dom";

import Section from "./UIComponents/Section";
import UIComponents from "./UIComponents/UIComponents.js";
import Navigation from "./components/Navigation";

const Booth = (props) => {
  const history = useHistory();

  const [state, setState] = useContext(AppContext);

  const pageData = props.data[1];
  const pageSections = pageData.Sections.map((section) => {
    return section;
  });
  const sectionOne = pageSections[0].Questions.map((questions) => {
    return questions;
  });

  const toHome = () => {
    setState({ ...state, progress: 0 });
    history.push("/");
  };
  const toConfirmation = () => {
    setState({ ...state, progress: 4 });
    history.push("/confirmation");
  };

  console.log("section one", pageSections[0].Label);
  return (
    <div className={"container"}>
      <Section {...props} test={"test"}>
        <h1>{pageSections[0].Label}!</h1>
        <h4>
          You're going to love iPro Booth, the top-rated application in
          Anesthesia.
        </h4>
        <br></br>
        <form>
          {sectionOne.map((block, index) => UIComponents(block, index))}
          <Navigation
            actionNext={toConfirmation}
            actionPrev={toHome}
            prev={true}
            next={true}
          />
        </form>
      </Section>
    </div>
  );
};

export default Booth;
