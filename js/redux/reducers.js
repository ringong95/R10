import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ConductReducer from './reducers/aboutreducer'
import ScheduleReducer from './reducers/scheduleReducer'
import LoadingReducer from './reducers/loadReducers'

export default  combineReducers({
  navigation: NavigationReducer,
  conducts: ConductReducer,
  schedule: ScheduleReducer,
  loading: LoadingReducer,
})