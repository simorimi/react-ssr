import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "./constant.js";

export const fetchPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.POPULAR, FETCH_OPTIONS);

  return await response.json();
};
