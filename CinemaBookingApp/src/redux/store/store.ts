import {configureStore} from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import showReducer from '../slices/showSlice';
import bookingReducer from '../slices/bookingSlice';
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showReducer,
    booking: bookingReducer,
  },
});
