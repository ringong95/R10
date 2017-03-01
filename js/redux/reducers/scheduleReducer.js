import { LOADSCHEDULE } from './../actions/fetchactions';
import { formatDataObject } from './../../lib/formatData'
import { ListView } from 'react-native'

const InitialState = {}
export default ScheduleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADSCHEDULE:
      return action.payload
      // return {dataSource: ds.cloneWithRows(action.payload)}
    default:
      return state
  }
}