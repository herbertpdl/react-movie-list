import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer'
import userReducer from './user/user.reducer'

export default combineReducers({
  movies: moviesReducer,
  user: userReducer,
});
