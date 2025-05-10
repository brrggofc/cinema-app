import React, { useState } from 'react';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import './App.css'; // якщо є

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Список фільмів</h1>

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
            border: '1px solid #ccc',
            width: '250px'
          }}
        />
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
