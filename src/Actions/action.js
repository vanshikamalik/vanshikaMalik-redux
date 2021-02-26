import types from "./types";

export function fetchData(data) {
  return {
    type: types.Send_Request,
    payload: data
  };
}

export function fetchDataSuccess(users) {
  return {
    type: types.Send_Request_Success,
    payload: users
  };
}

export function fetchDataFailure(error) {
  return {
    type: types.Send_Request_Failure,
    payload: {},
    error: error
  };
}
