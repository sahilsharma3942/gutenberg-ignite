// ListHeader.js
import React from "react";
import { Link } from "react-router-dom"; // Link component for navigation
import "./ListHeader.css"; // Import the CSS file
import backIcon from "../../assets/icons/Back.svg"; // Import back icon

// Header component for the list page
const ListHeader = ({ genre, inputSearch, debouncedHandleSearch }) => {
  return (
    <div className="header-container"> {/* Header container */}
      <h1>
        <Link to="/"> {/* Link to navigate back to the genre page */}
          <img className="back-icon" src={backIcon} alt="Back" />
        </Link>
        {genre} 
      </h1>
      <input
        className="search-box" // Search input box
        type="text"
        placeholder="Search" // Placeholder text
        value={inputSearch} // Controlled input value
        onChange={(e) => debouncedHandleSearch(e.target.value)} // Update inputSearch state on change
      />
    </div>
  );
};

export default ListHeader;