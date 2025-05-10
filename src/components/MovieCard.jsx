import React from 'react';
import './MovieCard.css'; 

function MovieCard({ title, description, genre, poster, date, time }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre"><strong>Жанр:</strong> {genre}</p>
        <p className="movie-description">{description}</p>
        <p className="movie-date-time"><strong>Сеанс:</strong> {date} о {time}</p>
      </div>
    </div>
  );
}

export default MovieCard;
