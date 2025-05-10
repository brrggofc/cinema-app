import React from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
