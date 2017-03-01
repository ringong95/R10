import { LOADCONDUCT } from './../actions/fetchactions';

const InitialState = {}
export default ConductReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADCONDUCT:
      return action.payload
    default:
      return state
  }
}