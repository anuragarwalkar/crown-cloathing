import { all } from "redux-saga/effects";
import setCurrentUserSaga from "./redux/user/user.saga";

export default function* rootSaga() {
  yield all([setCurrentUserSaga()]);
}
