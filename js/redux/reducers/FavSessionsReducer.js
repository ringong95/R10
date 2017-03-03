import { LOADFORMATEDFAVS, LOADUNFORMATEDFAVS } from './../actions/fetchactions'
import faves, { FaveQuery } from './../../config/model'
import { getFaves } from './../../lib/formatData'
import { formatSessionData } from './../../lib/formatData'

const speakersInitialState = { unformated: [], formated: { datablob: {}, sectionIds: {}, rowIds: {} } }
const FavSessionsReducer = (state = speakersInitialState, action) => {
  switch (action.type) {
    case LOADFORMATEDFAVS:
      let FaveIDs = FaveQuery(faves)
      let FavSessions = action.payload
      let allMatching = getFaves(FaveIDs, FavSessions)
      return { ...state, formated: formatSessionData(allMatching) }
    case LOADUNFORMATEDFAVS:
      FaveIDs = FaveQuery(faves)
      FavSessions = action.payload
      allMatching = getFaves(FaveIDs, FavSessions)
      return { ...state, unformated: allMatching }
    default:
      return state
  }
}
export default FavSessionsReducer