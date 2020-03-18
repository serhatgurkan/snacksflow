import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainActions from "@containers/main/actions";
import Todos from "@screens/todos";

const Main = Wrapper => props => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(MainActions.fetchTodos()), []);
  const todos = useSelector(state => state?.main?.todos);
  return (
    <Wrapper.Navigator>
      <Wrapper.Screen
        name="Todos"
        component={Todos}
        initialParams={{ todos: todos }}
      />
      {props.children}
    </Wrapper.Navigator>
  );
};

export default Main;
