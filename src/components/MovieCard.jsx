import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <button
        onClick={() => navigate(`/booking/${movie.id}`)}
        className="booking-button"
      >
        Забронювати
      </button>
    </div>
  );
}

export default MovieCard;
