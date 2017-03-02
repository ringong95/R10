import { LOADSPEAKER } from './../actions/fetchactions'
import {formatDataObject} from './../../lib/formatData'
const speakerInitialState = {}
export default (state = speakerInitialState, action) => {
  switch (action.type) {
    case LOADSPEAKER:
      return formatDataObject(action.payload)
    default:
      return state
  }
}