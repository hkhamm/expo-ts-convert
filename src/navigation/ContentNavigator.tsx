import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import One from "../components/content/One";
import Two from "../components/content/Two";
import Three from "../components/content/Three";

export type ContentNavigatorParams = {
  One: undefined;
  Two: undefined;
  Three: undefined;
};

const Stack = createStackNavigator<ContentNavigatorParams>();

const ContentNavigator: FC = () => (
  <Stack.Navigator initialRouteName="One">
    <Stack.Screen name="One" component={One} />
    <Stack.Screen name="Two" component={Two} />
    <Stack.Screen name="Three" component={Three} />
  </Stack.Navigator>
);

export default ContentNavigator;
