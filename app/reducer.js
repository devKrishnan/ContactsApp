import { EDIT_CONTACT, ADD_CONTACT } from './actions'
import { combineReducers } from 'redux'

const initialState = [{
    "id": 226,
    "first_name": "Batman",
    "last_name": " Robin",
    "email": "abc@gmail.com",
    "phone_number": "9038524128",
    "profile_pic": "/images/missing.png",
    "favorite": true,
    "created_at": "2017-06-09T11:18:08.511Z",
    "updated_at": "2017-06-18T08:50:33.808Z"
},{
    "id": 226,
    "first_name": "Batman",
    "last_name": " Robin",
    "email": "abc@gmail.com",
    "phone_number": "9038524128",
    "profile_pic": "/images/missing.png",
    "favorite": true,
    "created_at": "2017-06-09T11:18:08.511Z",
    "updated_at": "2017-06-18T08:50:33.808Z"
}]

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
