export const LOADCONDUCT = 'LOADCONDUCT'
export const LOADSCHEDULE = 'LOADSCHEDULE'
export const TOGGLELOAD = 'TOGGLELOAD'
export const LOADSPEAKER = 'LOADSPEAKER'
export const LOADFORMATEDFAVS = 'LOADFORMATEDFAVS'
export const LOADUNFORMATEDFAVS = 'LOADUNFORMATEDFAVS'
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
export const fetchSpeaker = (speakerId) => (dispatch) => {
  dispatch(toggleLoading(false))
  const link = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
  fetch(link, getRequest)
    .then(response => response.json())
    .then(json => {
      dispatch(loadSpeaker(json))
      dispatch(toggleLoading(true))
    });
};
export const fetchFavSessions = (data) => (dispatch) => {
  if (data.load) {
    dispatch(toggleLoading(false))
  }
  fetch('https://r10app-95fea.firebaseio.com/sessions.json', getRequest)
    .then(response => response.json())
    .then(json => {
      console.log(data)
      if (data.formated) {
        dispatch(loadFormatedFavSessions(json))
      }
      else {
        dispatch(loadunFormatedFavSessions(json))
      }
      if (data.load) {
        dispatch(toggleLoading(true))
      }
    });
}
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
function loadSpeaker(items) {
  return {
    type: LOADSPEAKER,
    payload: items
  }
}
function loadFormatedFavSessions(items) {
  return {
    type: LOADFORMATEDFAVS,
    payload: items
  }
}
function loadunFormatedFavSessions(items) {
  return {
    type: LOADUNFORMATEDFAVS,
    payload: items
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