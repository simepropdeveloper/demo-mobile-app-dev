import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  movieShow: <any>[],
};
const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getLoadBegin(state) {
      state.loading = true;
      state.error = null;
    },
    getLoadError(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.movieShow = [];
    },
    getMovieShow(state, action) {
      state.movieShow = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});
export const {getLoadBegin, getLoadError, getMovieShow} = showSlice.actions;
export default showSlice.reducer;
