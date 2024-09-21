// GenrePage component to display all genres
import React from "react";
import "./GenrePage.css";
import { Link } from "react-router-dom"; // Link component for routing
import GenreCard from "../../components/GenreCard/GenreCard"; // GenreCard component
import { GENRES } from "../../constants/constants";

const GenrePage = () => {
  return (
    <div className="genre-page-container"> 
      <div className="genre-header">
        <h1 className="genre-heading">Gutenberg Project</h1> {/* Main heading */}
        <h4 className="genre-subheading">
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </h4>
      </div>
      <div className="genre-body">
        {GENRES.map((genre, index) => (
          <Link to={`/${genre.value}`} key={index} className="genre-link"> {/* Each genre links to its respective page */}
            <GenreCard genre={genre.value} iconSrc={genre.icon} /> {/* Rendering GenreCard for each genre */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;