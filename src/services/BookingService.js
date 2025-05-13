// Сервіс для роботи з бронюванням квитків

const STORAGE_KEY = 'bookings';

export const BookingService = {
  getBookedSeats(movieId) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return data[movieId] || [];
  },

  saveBooking(movieId, selectedSeats, userData) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const previousSeats = data[movieId] || [];

    const updatedSeats = [...new Set([...previousSeats, ...selectedSeats])];

    data[movieId] = updatedSeats;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    console.log('Бронювання збережено:', {
      movieId,
      seats: updatedSeats,
      user: userData,
    });
  }
};
