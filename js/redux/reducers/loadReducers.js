import { TOGGLELOAD } from './../actions/fetchactions'
const loadInitialState = false
export default loaderReducer = (state = loadInitialState, action) => {
  switch (action.type) {
    case TOGGLELOAD:
    console.log(state)
      return action.payload
    default:
      return state
  }
}