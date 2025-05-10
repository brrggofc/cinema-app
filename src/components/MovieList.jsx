import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';


function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          genre={movie.genre}
          poster={movie.poster}
          date={movie.date}
          time={movie.time}
        />
      ))}
    </div>
  );
}

export default MovieList;
