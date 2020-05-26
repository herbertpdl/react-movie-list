import { createSelector } from 'reselect'

const selectMovies = state => state.movies

export const selectMoviesList = createSelector(
  [selectMovies],
  (movies) => movies.moviesList
)

export const selectLoadingMovies = createSelector(
  [selectMovies],
  (movies) => movies.loadingMovies
)
