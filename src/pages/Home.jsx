import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import moviesData from '../data/movies';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="Home"
      style={{
        backgroundColor: '#0d0d0d',
        minHeight: '100vh',
        paddingBottom: '2rem'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: '#ffd700',
          fontWeight: 'bold'
        }}
      >
        Список фільмів
      </h1>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Пошук фільму..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '2px solid #ffd700',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            width: '250px',
            outline: 'none'
          }}
        />
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
