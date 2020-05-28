import UserActionTypes from './user.types'

export function setUserToken(data) {
  return {
    type: UserActionTypes.SET_USER_TOKEN,
    payload: data,
  }
}

export function setUserData(data) {
  return {
    type: UserActionTypes.SET_USER_DATA,
    payload: data,
  }
}
