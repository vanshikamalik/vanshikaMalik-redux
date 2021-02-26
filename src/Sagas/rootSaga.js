import { call, take, all } from "redux-saga";
import fetchDataSaga from "./fetchDataSaga";

export default function* RootSaga() {
  yield all[fetchDataSaga()];
}
