import { takeEvery, call } from "redux-saga/effects";
import types from "../Actions/types";
import axios from "axios";

function* asyncFetchRequest() {
  try {
    const url = "https://dummyapi.io/data/api/user";
    const response = yield call(() => axios(url));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export function* watchFetchDataSaga() {
  yield takeEvery(types.Send_Request, asyncFetchRequest);
}
