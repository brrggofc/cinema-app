const BOOKING_KEY = 'cinema-bookings';

export const BookingService = {
  // Отримати всі бронювання
  getAllBookings: () => {
    const data = localStorage.getItem(BOOKING_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Отримати заброньовані місця для конкретного фільму
  getBookedSeatsByMovieId: (movieId) => {
    const bookings = BookingService.getAllBookings();
    return bookings
      .filter(b => b.movieId === movieId)
      .flatMap(b => b.seats);
  },

  // Зберегти нове бронювання
  saveBooking: (booking) => {
    const bookings = BookingService.getAllBookings();
    bookings.push(booking); // додаємо нове бронювання
    localStorage.setItem(BOOKING_KEY, JSON.stringify(bookings));
  }
};
