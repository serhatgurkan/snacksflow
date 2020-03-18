import { put, call } from "redux-saga/effects";
import MainActions from "@containers/main/actions";
import ApiStoreProvider from "@services/api.service";

export function* fetchTodos() {
  try {
    yield put(MainActions.fetchTodosLoading());
    const todos = yield call(ApiStoreProvider.store.todos.get);
    if (todos) {
      yield put(MainActions.fetchTodosSuccess(todos.data));
    } else {
      yield put(
        MainActions.fetchTodosFailure("There was an error fetching todos data")
      );
    }
  } catch (error) {
    console.log(error);
  }
}
