import { FETCH_PROPERTIES } from '../actions/index'
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PROPERTIES:
      return action.payload.data.data;
    default:
      return state
  }
}
