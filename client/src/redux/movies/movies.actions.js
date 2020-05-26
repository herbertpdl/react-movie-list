import MoviesActionTypes from './movies.types'

import { getMoviesByKeyword } from '../../services/index'

export const fetchMovies = (title, page = 1) => {
  return (dispatch) => {
    // Set loading status and reset movie list
    dispatch(handleMoviesLoading());
    dispatch(setMoviesList([]))

    getMoviesByKeyword(title, page)
      .then((resp) => {
        dispatch(setMoviesList(resp.Search || []))

        dispatch(setCurrentSearch(title))

        dispatch(handleMoviesLoading());
      })
  }
}

function setMoviesList(data) {
  return {
    type: MoviesActionTypes.SET_MOVIES_LIST,
    payload: data,
  }
}

function setCurrentSearch(data) {
  return {
    type: MoviesActionTypes.SET_CURRENT_SEARCH,
    payload: data,
  }
}

function handleMoviesLoading() {
  return {
    type: MoviesActionTypes.LOADING_MOVIES_LIST,
  }
}
