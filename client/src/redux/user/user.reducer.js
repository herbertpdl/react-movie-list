import UserActionTypes from './user.types'

const INITIAL_STATE = {
  userToken: null,
  userData: {},
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      }
    case UserActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
