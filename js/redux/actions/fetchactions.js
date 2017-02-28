export const LOADCONDUCT = 'LOADCONDUCT'

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
  fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json', getRequest)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(loadConducts(json))
    });
};

function loadConducts(items) {
  return {
    type: LOADCONDUCT,
    payload: items,
  };
}