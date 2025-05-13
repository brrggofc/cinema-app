import React from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';

function Booking() {
  const { id } = useParams();

  return (
    <div
      style={{
        backgroundColor: '#0d0d0d',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <h2 style={{ color: '#ffd700' }}>Бронювання для фільму #{id}</h2>
      <CinemaHall />
    </div>
  );
}

export default Booking;
