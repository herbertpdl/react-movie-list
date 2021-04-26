import {
  takeLatest,
  takeEvery,
  put,
  all,
  call,
  delay,
  select,
} from 'redux-saga/effects'

import MoviesActionTypes from './movies.types'

import {
  setMoviesList,
  setCurrentSearch,
  handleMoviesLoading,
} from './movies.actions'

import { setUserData } from '../user/user.actions'

import { getMoviesByKeyword, updateFavoriteMovies } from '../../services'

function* getMovieList({ payload }) {

  try {
    if (!payload.fromPagination) {
      yield delay(500)
    }

    yield put(handleMoviesLoading(true))
  
    const movieList = yield getMoviesByKeyword(payload.title, payload.page)
  
    yield put(setMoviesList(movieList))
  
    yield put(setCurrentSearch(payload.title))
    yield put(handleMoviesLoading(false))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export function* fetchMovies() {
  yield takeLatest(MoviesActionTypes.FETCH_MOVIES, getMovieList)
}

const getUser = (state) => state.user.userData

function* editFavoriteMovie({ payload }) {
  const userData = yield select(getUser)
  const movieId = payload

  if (userData.favoritesMovies.includes(movieId)) {
    // Find movie id index
    const index = userData.favoritesMovies.indexOf(movieId)

    // Remove movie id from list
    userData.favoritesMovies.splice(index, 1)

    yield updateMovies(userData)
  } else {
    // Push movie id to movies list
    userData.favoritesMovies.push(movieId)

    yield updateMovies(userData)
  }
}

function* updateMovies(data) {
  // Update in database
    /* We are sending password again, because
       json-server-auth will encrypt the encrypted passord again */
    const newUserData = yield updateFavoriteMovies({ ...data, password: '1234'})

    yield put(setUserData(newUserData))
}

export function* handleFavoriteMovie() {
  yield takeEvery(MoviesActionTypes.HANDLE_FAVORITE_MOVIE, editFavoriteMovie)
}

export default function* moviesSagas() {
  yield all([call(fetchMovies), call(handleFavoriteMovie)])
}