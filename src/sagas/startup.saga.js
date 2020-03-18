import { put } from "redux-saga/effects";

export function* startup() {
  yield put(console.log("Startup saga"));
}
