import { all, call } from 'redux-saga/effects'

import moviesSagas from './movies/movies.sagas'
import userSagas from './user/user.sagas'

export default function* rootSaga() {
  yield all([call(moviesSagas), call(userSagas)])
}