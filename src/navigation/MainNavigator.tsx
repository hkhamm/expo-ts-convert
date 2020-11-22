import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Details from "../components/Details";

export type MainNavigatorParams = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<MainNavigatorParams>();

const MainNavigator: FC = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default MainNavigator;
