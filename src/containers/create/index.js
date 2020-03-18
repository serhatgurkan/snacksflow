import React from "react";
import List from "@screens/list";
import Task from "@screens/task";

const Create = Wrapper => props => {
  return (
    <Wrapper.Navigator>
      <Wrapper.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Wrapper.Screen
        name="Task"
        component={Task}
        options={{ headerShown: false }}
      />
    </Wrapper.Navigator>
  );
};

export default Create;
