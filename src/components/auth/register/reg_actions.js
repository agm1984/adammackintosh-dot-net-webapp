import {
  REGISTRATION_NEXT_STEP,
  REGISTRATION_PREV_STEP,
  REGISTRATION_COMPLETE,
} from './reg_types'

/**
 * Proceeds to the next registration step.
 * @param {string} step Name of the next step
 */
export const handleNextStep = step => ({
  type: REGISTRATION_NEXT_STEP,
  payload: step,
})

/**
 * Goes back to the previous registration step.
 * @param {string} gotoStep Name of the previous step
 */
export const handlePrevStep = gotoStep => ({
  type: REGISTRATION_PREV_STEP,
  payload: gotoStep,
})

/**
 * Saves the user's JWT Token after signup is complete.
 * @param {string} token JWT Token
 */
export const handleCompletion = token => (dispatch) => {
  localStorage.setItem('token@adam', JSON.stringify(token))
  return dispatch({
    type: REGISTRATION_COMPLETE,
    payload: 'DONE',
  })
}
