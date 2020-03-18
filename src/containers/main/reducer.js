import { createReducer } from "reduxsauce";
import { INITIAL_STATE } from "@containers/main/initialState";
import { MainTypes } from "@containers/main/actions";

export const fetchTodosLoading = state => ({
  ...state,
  todosIsLoading: true,
  todosErrorMessage: null
});

export const fetchTodosSuccess = (state, { todos }) => ({
  ...state,
  todos: todos,
  todosIsLoading: false,
  todosErrorMessage: null
});

export const fetchTodosFailure = (state, { errorMessage }) => ({
  ...state,
  todos: {},
  todosIsLoading: false,
  todosErrorMessage: errorMessage
});

export const reducer = createReducer(INITIAL_STATE, {
  [MainTypes.FETCH_TODOS_LOADING]: fetchTodosLoading,
  [MainTypes.FETCH_TODOS_SUCCESS]: fetchTodosSuccess,
  [MainTypes.FETCH_TODOS_FAILURE]: fetchTodosFailure
});
