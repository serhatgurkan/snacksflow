import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator, CreateNavigator } from "@containers/snacks";
const Stack = createStackNavigator();
const Root = () => (
  <NavigationContainer>
    <MainNavigator>
      <Stack.Screen name="Create" component={CreateNavigator} />
    </MainNavigator>
  </NavigationContainer>
);
export default Root;
