import React from 'react';
import "./GenreCard.css"; 
import nextIcon from '../../assets/icons/Next.svg';

const GenreCard = ({ genre, iconSrc, isMobile }) => {
  return (
    <div className={isMobile ? "mobile-genre-card-container" : "genre-card-container"}> {/* Choose one class based on isMobile */}
      <div className={isMobile ? "mobile-genre-card-left" : "genre-card-left"}>
        <img className={isMobile ? "mobile-genre-icon" : "genre-icon"} src={iconSrc} alt="" /> {/* Genre icon */}
        <span className={isMobile ? "mobile-card-heading" : "card-heading"}>{genre}</span> {/* Genre name */}
      </div>
      <div>
        <img src={nextIcon} alt="Next icon" /> {/* Next icon for navigation */}
      </div>
    </div>
  );
};

export default GenreCard;
