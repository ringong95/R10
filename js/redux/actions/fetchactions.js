export const LOADCONDUCT = 'LOADCONDUCT'
export const LOADSCHEDULE = 'LOADSCHEDULE'
export const TOGGLELOAD = 'TOGGLELOAD'
const getRequest = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  credentials: 'include',
};

export const fetchConducts = () => (dispatch) => {
  dispatch(toggleLoading(false))
  fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json', getRequest)
    .then(response => response.json())
    .then(json => {
      dispatch(loadConducts(json))
      dispatch(toggleLoading(true))
    });
};
export const fetchSchedule = () => (dispatch) => {
  dispatch(toggleLoading(false))
  fetch('https://r10app-95fea.firebaseio.com/sessions.json', getRequest)
    .then(response => response.json())
    .then(json => {
      dispatch(loadSchedule(json))
      dispatch(toggleLoading(true))
    });
};
function toggleLoading(stateOfLoad) {
  return {
    type: TOGGLELOAD,
    payload: stateOfLoad,
  }
}
function loadSchedule(items) {
  return {
    type: LOADSCHEDULE,
    payload: items,
  };
}
function loadConducts(items) {
  return {
    type: LOADCONDUCT,
    payload: items,
  };
}