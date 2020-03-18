import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "@containers/main";
import Create from "@containers/create";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigator = Main(Stack);
export const CreateNavigator = Create(Stack);
