export const ADD_CONTACT = 'ADD_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'


export function addContact (contactDetails) {
  return { type: ADD_CONTACT, contactDetails }
}
export function editContact (contactDetails, index) {
  return { type: EDIT_CONTACT, contactDetails, index }
}
