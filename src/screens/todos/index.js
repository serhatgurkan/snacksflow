import React from "react";
import { View, Button, Text } from "react-native";
const Todos = ({ navigation, route }) => {
  const todos = route.params?.todos;

  return (
    <View>
      <Button
        title="Go to create task"
        onPress={() => navigation.navigate("Create", { screen: "Task" })}
      />
      <Button
        title="Go to create list"
        onPress={() => navigation.navigate("Create", { screen: "List" })}
      />
      {todos.map(item => (
        <Text key={item.id.toString()}>{item.value}</Text>
      ))}
    </View>
  );
};

export default Todos;
