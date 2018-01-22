import { push } from 'react-router-redux'
import client from '../../apolloClient'
import { AUTH_SUCCESS, AUTH_FAIL } from './auth_types'

const handleSignInSuccess = token => async (dispatch) => {
  try {
    localStorage.setItem('token@adam', JSON.stringify(token))
    client.resetStore()
    dispatch({ type: AUTH_SUCCESS })
    return dispatch(push('people'))
  } catch (e) {
    return dispatch({ type: AUTH_FAIL })
  }
}

export default handleSignInSuccess
