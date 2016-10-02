import { combineReducers } from 'redux';
import PropertiesReducer from './reducer_properties';

const rootReducer = combineReducers({
  properties: PropertiesReducer
});

export default rootReducer;
