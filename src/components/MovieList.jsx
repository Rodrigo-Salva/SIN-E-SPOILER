import React from 'react';

const MovieList = ({ movies, onSelectShowtime }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
          <p>Duration: {movie.duration}</p>

          {/* Mostrar los horarios de la película */}
          <div className="showtimes">
            <h4>Showtimes:</h4>
            <ul>
              {movie.showTimes.map((showtime, index) => (
                <li key={index}>
                  <button
                    onClick={() => onSelectShowtime(showtime)} // Llamar a onSelectShowtime cuando se selecciona un horario
                    className="showtime-button"
                  >
                    {showtime}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
