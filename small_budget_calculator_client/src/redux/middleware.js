import { ADD_BUDGET } from './types'
import {showAlert} from './actions/appActions'

const forbidden = ['evidence-based', 'science-based', 'vulnerable', 'entitlement', 'diversity', 'transgender',  'fetus']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type ===  ADD_BUDGET) {
        const found = forbidden.filter(w => action.payload.name.includes(w) || action.payload.description.includes(w))
        if (found.length) {
          return dispatch(showAlert('You are spamer! Stop do it!'))
        }
      }
      return next(action)
    }
  }
}