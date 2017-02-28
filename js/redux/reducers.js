import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ConductReducer from './reducers/aboutreducer'


export default  combineReducers({
  navigation: NavigationReducer,
  conducts: ConductReducer,
})