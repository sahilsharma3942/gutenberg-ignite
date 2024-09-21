// GenreCard component for individual genre display
import React from 'react';
import "./GenreCard.css" 
import nextIcon from '../../assets/icons/Next.svg';

const GenreCard = ({ genre, iconSrc }) => {
  return (
    <div className="genre-card-container">
      <div className="genre-card-left">
        <img className="genre-icon" src={iconSrc} alt="" /> {/* Genre icon */}
        <span className="card-heading">{genre}</span> {/* Genre name */}
      </div>
      <div>
        <img src={nextIcon} alt="Next icon" /> {/* Next icon for navigation */}
      </div>
    </div>
  );
};

export default GenreCard;