import React from "react";
import { ThreeDot } from "react-loading-indicators";
import "./Loader.css"; // Stílusfájl a spinnerhez

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDot
        className="loader-dots"
        color="#ffcd57"
        size="small"
        text=""
        textColor=""
      />
    </div>
  );
};

export default Loader;
