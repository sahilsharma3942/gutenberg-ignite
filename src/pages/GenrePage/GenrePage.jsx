import React from "react";
import "./GenrePage.css";
import { Link } from "react-router-dom"; // Link component for routing
import GenreCard from "../../components/GenreCard/GenreCard"; // GenreCard component
import { GENRES } from "../../constants/constants";

const GenrePage = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-genre-page-container" : "genre-page-container"}> {/* Choose one class based on isMobile */}
      <div className={isMobile ? "mobile-genre-header" : "genre-header"}>
        <h1 className={isMobile ? "mobile-genre-heading" : "genre-heading"}>Gutenberg Project</h1> {/* Main heading */}
        <h4 className={isMobile ? "mobile-genre-subheading" : "genre-subheading"}>
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </h4>
      </div>
      <div className={isMobile ? "mobile-genre-body" : "genre-body"}>
        {GENRES.map((genre, index) => (
          <Link to={`/${genre.value}`} key={index} className={isMobile ? "mobile-genre-link" : "genre-link"}> {/* Each genre links to its respective page */}
            <GenreCard genre={genre.value} iconSrc={genre.icon} isMobile={isMobile}/> {/* Rendering GenreCard for each genre */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
