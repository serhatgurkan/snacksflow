import { takeLatest, all } from "redux-saga/effects";
import { StartupTypes } from "@store/startup/actions";
import { MainTypes } from "@containers/main/actions";

import { startup } from "@sagas/startup.saga";
import { fetchTodos } from "@sagas/todos.saga";

export default function* root() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)]);
  yield all([takeLatest(MainTypes.FETCH_TODOS, fetchTodos)]);
}
