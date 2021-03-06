import MoviesActionTypes from './movies.types'

const INITIAL_STATE = {
  currentSearch: '',
  loadingMovies: false,
  moviesList: [],
  totalResults: 0,
  totalPages: 0,
}

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload.Search || [],
        totalResults: action.payload.totalResults,
        totalPages: Math.ceil(action.payload.totalResults/10), // Divide totalResults by 10 and rount to up
      }
    case MoviesActionTypes.SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload,
      }
    case MoviesActionTypes.LOADING_MOVIES_LIST:
      return {
        ...state,
        loadingMovies: action.payload,
      }
    default:
      return state
  }
}

export default moviesReducer
