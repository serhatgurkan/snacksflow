import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  fetchTodos: ["success", "error"],
  fetchTodosLoading: null,
  fetchTodosSuccess: ["todos"],
  fetchTodosFailure: ["errorMessage"]
});

export const MainTypes = Types;
export default Creators;
