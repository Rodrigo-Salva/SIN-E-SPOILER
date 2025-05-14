import React from 'react';

// Componente de la lista de películas
const MovieList = ({ movies, onSelectShowtime }) => {
  // Función para manejar errores de carga de imagen
  const handleImageError = (event, movieTitle) => {
    // Oculta la imagen que falló
    event.target.style.display = 'none';
    
    // Añade un atributo data-title al contenedor padre para mostrar el título como fallback
    const container = event.target.parentNode;
    container.classList.add('image-error');
    container.setAttribute('data-title', movieTitle);
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div className="card" key={movie.id}>
          <div className="card__header">
            {/* Contenedor para la imagen con atributo data-title */}
            <div className="card__image-container" data-title={movie.title}>
              <img 
                src={movie.image} 
                alt={movie.title}
                className="card__image" 
                onError={(e) => handleImageError(e, movie.title)}
              />
            </div>
          </div>
          <div className="card__body">
            <h3 className="card__title">{movie.title}</h3>
            <p className="card__description">{movie.description}</p>
            <p className="card__rating">Rating: {movie.rating}</p>
            <p className="card__duration">Duration: {movie.duration}</p>

            {/* Mostrar los horarios de la película */}
            <div className="card__showtimes">
              <h4 className="card__subtitle">Showtimes:</h4>
              <ul className="showtime-list">
                {movie.showTimes.map((showtime, index) => (
                  <li key={index} className="showtime-item">
                    <button
                      onClick={() => onSelectShowtime(movie.id, showtime)}
                      className="btn btn--primary showtime-button"
                    >
                      {showtime}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;