import React from "react";
import { StyledSpinner } from "../App.styles";

const Spinner = () => {
  return (
    <StyledSpinner>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </StyledSpinner>
  );
};

export default Spinner;
