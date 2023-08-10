import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectMovie: null,
  movieList: <any>[],
  loading: false,
  error: null,
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies(state, action) {
      state.movieList = action.payload;
      state.loading = false;
      state.error = null;
    },
    getLoadBegin(state) {
      state.loading = true;
      state.error = null;
    },
    getLoadError(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.movieList = [];
    },
    setMovieIdSelected(state, action) {
      state.selectMovie = action.payload;
    },
  },
});
export const {getLoadBegin, getMovies, getLoadError, setMovieIdSelected} =
  movieSlice.actions;
export default movieSlice.reducer;
