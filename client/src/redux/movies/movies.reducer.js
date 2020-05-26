import MoviesActionTypes from './movies.types'

const INITIAL_STATE = {
  currentSearch: '',
  loadingMovies: false,
  moviesList: [],
}

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
      }
    case MoviesActionTypes.SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload,
      }
    case MoviesActionTypes.LOADING_MOVIES_LIST:
      return {
        ...state,
        loadingMovies: !state.loadingMovies,
      }
    default:
      return state
  }
}

export default moviesReducer
