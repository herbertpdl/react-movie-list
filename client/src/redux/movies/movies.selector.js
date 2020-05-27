import { createSelector } from 'reselect'

const selectMovies = state => state.movies

export const selectMoviesList = createSelector(
  [selectMovies],
  (movies) => movies
)

export const selectLoadingMovies = createSelector(
  [selectMovies],
  (movies) => movies.loadingMovies
)
