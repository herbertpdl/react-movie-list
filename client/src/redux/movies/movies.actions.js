import MoviesActionTypes from './movies.types'

export function fetchMovies({ title, page = 1, fromPagination = false}){
  return {
    type: MoviesActionTypes.FETCH_MOVIES,
    payload: { title, page, fromPagination },
  }
}

export function setMoviesList(data) {
  return {
    type: MoviesActionTypes.SET_MOVIES_LIST,
    payload: data,
  }
}

export function setCurrentSearch(data) {
  return {
    type: MoviesActionTypes.SET_CURRENT_SEARCH,
    payload: data,
  }
}

export function handleMoviesLoading(data) {
  return {
    type: MoviesActionTypes.LOADING_MOVIES_LIST,
    payload: data,
  }
}
