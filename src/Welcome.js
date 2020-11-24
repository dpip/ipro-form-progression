import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";

import Section from "./UIComponents/Section";
import Navigation from "./components/Navigation";
import UIComponents from "./UIComponents/UIComponents.js";

import "./styles/styles.scss";

const Welcome = (props) => {
  const history = useHistory();
  const [state, setState] = useContext(AppContext);
  const [section, setSection] = useState(0);

  const toThanks = () => {
    setState({ ...state, progress: 3 });
    history.push("/booth");
  };

  const handleSection = (e, i) => {
    setSection(i);
    setState({ ...state, progress: i });
  };

  const pageData = state.pageData[0];
  const pageSections = pageData.Sections.map((section) => {
    return section;
  });
  const sectionOne = pageSections[0].Questions.map((questions) => {
    return questions;
  });
  const sectionTwo = pageSections[1].Questions.map((questions) => {
    return questions;
  });

  return (
    <div className={"container"}>
      <h1 className={"page-title"}>{pageSections[0].Label}</h1>
      {section === 0 ? (
        <Section key={section} {...props}>
          <form autoComplete="on">
            {sectionOne.map((block, index) => UIComponents(block, index))}
          </form>
          <Navigation
            actionNext={handleSection}
            actionPrev={handleSection}
            next={true}
          />
        </Section>
      ) : (
        <Section key={section} {...props}>
          <h3>{pageSections[1].Label}</h3>
          <form autoComplete="on">
            {sectionTwo.map((block, index) => UIComponents(block, index))}
            <Navigation
              actionNext={toThanks}
              actionPrev={handleSection}
              prev={true}
              next={true}
            />
          </form>
        </Section>
      )}
    </div>
  );
};

export default Welcome;

// import React, { useContext } from "react";
// import { AppContext } from "./AppContext";

// import Section from "./UIComponents/Section";
// import Navigation from "./components/Navigation";
// import UIComponents from "./UIComponents/UIComponents.js";

// // import Validate from "./utils/validate.js";

// import "./styles/styles.scss";

// const Welcome = (props) => {
//   const [state, setState] = useContext(AppContext);

//   const pageData = props.data[0];
//   const pageSections = pageData.Sections.map((section) => {
//     return section;
//   });
//   const sectionOne = pageSections[0].Questions.map((questions) => {
//     return questions;
//   });
//   const sectionTwo = pageSections[1].Questions.map((questions) => {
//     return questions;
//   });

//   console.log("state from welcome", state);
//   return (
//     <div className={"container"}>
//       <h1 className={"page-title"}>{pageSections[0].Label}</h1>
//       <Section {...props}>
//         <form autoComplete="on">
//           {sectionOne.map((block, index) => UIComponents(block, index))}
//         </form>
//       </Section>
//       <Section {...props}>
//         <h3>{pageSections[1].Label}</h3>
//         <form autoComplete="on">
//           {sectionTwo.map((block, index) => UIComponents(block, index))}
//         </form>
//       </Section>
//       <Navigation next={"/booth"} />
//     </div>
//   );
// };

// export default Welcome;
