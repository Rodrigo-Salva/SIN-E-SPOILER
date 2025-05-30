
import React, { useState } from 'react';
import Rating from './Rating';
import ShowtimeSelector from './ShowtimeSelector';

const MovieCard = ({ movie }) => {
  const { title, rating, genre, duration, image, description, showTimes } = movie;
  const [imageError, setImageError] = useState(false);
  
  // Maneja el error de carga de imagen
  const handleImageError = () => {
    setImageError(true);
  };

  const handleShowtimeSelect = (time) => {
    alert(`Has seleccionado ${time} para ${title}`);
  };

  return (
    <article className="card card--movie">
      <div className="card__header">
        <div 
          className={`card__image-container ${imageError ? 'image-error' : ''}`}
          data-title={title}
        >
          <img 
            src={image}
            alt={`${title} poster`}
            className="card__image"
            onError={handleImageError}
          />
        </div>
        <div className="card__overlay">
          <span className="card__badge c-primary">{genre}</span>
        </div>
      </div>
      
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <div className="card__meta d-flex a-items-center g-2">
          <Rating value={rating} />
          <span className="card__duration c-secondary">{duration}</span>
        </div>
        
        <p className="card__description">{description}</p>
        
        <div className="card__showtimes">
          <h4 className="card__subtitle">Today's Showtimes</h4>
          <ShowtimeSelector
            showtimes={showTimes}
            onSelect={handleShowtimeSelect}
          />
        </div>
      </div>
    </article>
  );
};