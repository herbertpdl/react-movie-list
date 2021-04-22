import { takeLatest, put, all, call } from 'redux-saga/effects'

import MoviesActionTypes from './movies.types'

import {
  setMoviesList,
  setCurrentSearch,
  handleMoviesLoading,
} from './movies.actions'

import { getMoviesByKeyword } from '../../services'

export function* getMovieList({ payload }) {

  try {
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

export function* moviesSagas() {
  yield all([call(fetchMovies)])
}