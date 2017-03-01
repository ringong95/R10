import { LOADSCHEDULE } from './../actions/fetchactions';
import { formatDataObject, formatSessionData } from './../../lib/formatData'
import { ListView } from 'react-native'

const InitialState = { datablob: {}, sectionIds: {}, rowIds: {} }
export default ScheduleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADSCHEDULE:
      return formatSessionData(action.payload)
    default:
      return state
  }
}