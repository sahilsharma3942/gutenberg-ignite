// Loader.js
import React from "react";
import "./Loader.css"; // Import the CSS file

// Loader component to indicate loading state
const Loader = ({ loading }) => {
  return (
    <div className="loader-container"> {/* Container for loader */}
      {loading && <div className="loader"></div>} {/* Show loader when loading is true */}
    </div>
  );
};

export default Loader;