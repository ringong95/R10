import { LOADALLSPEAKER } from './../actions/fetchactions'
import faves, { FaveQuery } from './../../config/model'
import { formatDataObject, formatSessionData } from './../../lib/formatData'

const speakersInitialState = { datablob: {}, sectionIds: {}, rowIds: {} }
const FavSessionsReducer = (state = speakersInitialState, action) => {
  switch (action.type) {
    case LOADALLSPEAKER:
      const FaveIDs = FaveQuery(faves)
      const FavSessions = action.payload
      const allMatching = FaveIDs.reduce((acc, id) => {
        const matching = FavSessions.filter((speaker) => {
          if (speaker.session_id == id) {
            return speaker
          }
        })
        return acc.concat(matching);
      }, [])
      return formatSessionData(allMatching)
    default:
      return state
  }
}
export default FavSessionsReducer