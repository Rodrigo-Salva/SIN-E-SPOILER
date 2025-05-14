import React from 'react';

const MovieSearch = ({ onSearch }) => {
  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search movies..."
        className="search__input"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search__button">🔍</button>
    </div>
  );
};

export default MovieSearch;
