import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ConductReducer from './reducers/aboutreducer'
import ScheduleReducer from './reducers/scheduleReducer'
import LoadingReducer from './reducers/loadReducers'
import SpeakerReducer from './reducers/speakerReducer'
import FavesReducer from './reducers/FavSessionsReducer'

export default  combineReducers({
  navigation: NavigationReducer,
  conducts: ConductReducer,
  schedule: ScheduleReducer,
  loading: LoadingReducer,
  speaker: SpeakerReducer,
  Faves: FavesReducer
})