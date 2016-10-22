import { FETCH_PROPERTIES, FETCH_PROPERTY } from '../actions/index'
const INITIAL_STATE = { all: [], property: null }
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PROPERTIES:
      console.log(state)
      return {...state, all: action.payload.data.data };
    case FETCH_PROPERTY:
      return {...state, property: action.payload.data };
    default:
      return state
  }
}
