const apiKey = 'eccfefb3035d071fb4dfee85f8552a92';
const baseUrl = 'https://api.themoviedb.org/3/movie';

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const getPopularMovies = async () => {
  try {
    let response = await fetch(`${baseUrl}/popular?api_key=${apiKey}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      ' Something went wrong in getPopularMoviesList Function',
      error,
    );
  }
};
export const getUpComingMovies = async () => {
  try {
    let response = await fetch(`${baseUrl}/upcoming?api_key=${apiKey}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      ' Something went wrong in getNowPlayingMovies Function',
      error,
    );
  }
};

export const getTopRatedMovies = async () => {
  try {
    let response = await fetch(`${baseUrl}/top_rated?api_key=${apiKey}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(' Something went wrong in getTopRatedMovies Function', error);
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    let response = await fetch(
      `${baseUrl}/${id}?api_key=${apiKey}&append_to_response=videos`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(' Something went wrong in getTopRatedMovies Function', error);
  }
};

export const getTrailer = async (id: number) => {
  try {
    let response = await fetch(`${baseUrl}/${id}/videos?api_key=${apiKey}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(' Something went wrong in getTopRatedMovies Function', error);
  }
};

export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
};
