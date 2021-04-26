import { takeEvery, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { setUserToken, setUserData } from './user.actions'

import { logIn, getUserData } from '../../services'

function* handleLogin({ payload }) {
  const history = payload.history

  const userToken = yield logIn({
    email: payload.data.email,
    password: payload.data.password
  })

  if (!userToken) return
  
  yield put(setUserToken(userToken))

  // json-server-authentication middleware does not return data, just a token
  // that's why we're using another endpoint to retrieve it
  const userData = yield getUserData(1)

  if (!userData) return

  yield put(setUserData(userData))

  history.push('/search')
}

export function* userLogin() {
  yield takeEvery(UserActionTypes.LOGIN_USER, handleLogin)
}

export default function* userSagas() {
  yield all([call(userLogin)])
}