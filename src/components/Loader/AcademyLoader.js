import React from "react";
import { OrbitProgress } from "react-loading-indicators";
import "./Loader.css"; // Stílusfájl a spinnerhez

const AcademyLoader = () => {
  return (
    <div className="academy-loader-container">
      <OrbitProgress color="#ffcd57" size="small" text="" textColor="" />
    </div>
  );
};

export default AcademyLoader;
