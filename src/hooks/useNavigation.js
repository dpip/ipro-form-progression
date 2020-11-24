import { useContext } from "react";
import { AppContext } from "./AppContext";

const useNavigation = () => {
  const [state, setState] = useContext(AppContext);

  // Navigation handler based on previous  or next
  function navigate(index) {
    setState((state) => ({
      ...state,
      currentSection: index,
    }));
  }

  // Navigate to the previous section in the sections array
  function previousSection() {
    const newIndex =
      (((state.currenSection + -1) % state.sections.length) +
        state.sections.length) %
      state.sections.length;
    navigate(newIndex);
  }

  // Navigate to the current section in the sections array
  function nextSection() {
    const newIndex = (state.currentSection + 1) % state.sections.length;
    navigate(newIndex);
  }

  return {
    currentSection: state.currentSection,
    previousSection,
    nextSection,
  };
};

export default useNavigation;
