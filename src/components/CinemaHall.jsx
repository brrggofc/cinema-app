import React, { useState } from 'react';
import './CinemaHall.css';

const ROWS = 5;
const COLS = 8;

function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getSeatLabel = (index) => {
    const row = Math.floor(index / COLS) + 1;
    const col = (index % COLS) + 1;
    return `Ряд ${row}, місце ${col}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="hall">
        {Array.from({ length: ROWS }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            <div className="row-label">Ряд {rowIndex + 1}</div>
            {Array.from({ length: COLS }).map((_, colIndex) => {
              const index = rowIndex * COLS + colIndex;
              const isSelected = selectedSeats.includes(index);
              return (
                <div
                  key={index}
                  className={`seat ${isSelected ? 'selected' : 'available'}`}
                  onClick={() => toggleSeat(index)}
                >
                  {colIndex + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <p style={{ marginTop: '1rem' }}>
        Вибрані місця:{' '}
        {selectedSeats.length > 0
          ? selectedSeats
              .map((index) => {
                const row = Math.floor(index / COLS) + 1;
                const col = (index % COLS) + 1;
                return `Ряд ${row}, місце ${col}`;
              })
              .join('; ')
          : 'немає'}
      </p>
    </div>
  );
}

export default CinemaHall;
