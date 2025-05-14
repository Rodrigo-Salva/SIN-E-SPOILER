// components/ShowtimeSelector.jsx
import React, { useState } from 'react';

const ShowtimeSelector = ({ showtimes, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (time) => {
    setSelected(time);
    onSelect(time);
  };

  return (
    <div className="showtime-selector">
      {showtimes.map((time) => (
        <button
          key={time}
          className={`showtime ${selected === time ? 'showtime--selected' : ''}`}
          onClick={() => handleSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default ShowtimeSelector;
