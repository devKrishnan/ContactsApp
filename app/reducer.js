import { EDIT_CONTACT, ADD_CONTACT } from './actions'
import { combineReducers } from 'redux'

const initialState = []

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        action.contactDetails
      ]
    case EDIT_CONTACT:
      return state.map((contact, index) => {
        if (index === action.index) {
          return Object.assign({}, contact, action.contactDetails)
        }
        return member
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ contacts })
export default rootReducer
