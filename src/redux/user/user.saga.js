import { getDoc } from "firebase/firestore";
import { call, put, takeLatest } from "redux-saga/effects";
import { createUserProfileDocument } from "../../firebaseInit";
import { SET_CURRENT_USER_INIT } from "./user.types";
import { setCurrentUser } from "./user.actions";

function* getAndSetCurrentUser({ payload }) {
  const userRef = yield call(createUserProfileDocument, payload);
  const savedUser = yield call(getDoc, userRef);
  yield put(setCurrentUser({ id: savedUser.id, ...savedUser.data() }));
}

export default function* setCurrentUserSaga() {
  yield takeLatest(SET_CURRENT_USER_INIT, getAndSetCurrentUser);
}
