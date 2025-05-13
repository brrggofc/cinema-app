import React, { useState } from 'react';
import './CinemaHall.css'; // стилі напишемо окремо

const ROWS = 5;
const COLS = 8;

function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div>
      <div className="hall">
        {[...Array(ROWS * COLS)].map((_, i) => (
          <div
            key={i}
            className={`seat ${selectedSeats.includes(i) ? 'selected' : 'available'}`}
            onClick={() => toggleSeat(i)}
          />
        ))}
      </div>
      <p style={{ marginTop: '1rem' }}>
        Вибрані місця: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'немає'}
      </p>
    </div>
  );
}

export default CinemaHall;
