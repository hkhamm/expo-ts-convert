import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Details from "../components/Details";
import ContentNavigator from "./ContentNavigator";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faBars,
  faBreadSlice,
} from "@fortawesome/free-solid-svg-icons";

export type TabNavigatorParams = {
  Home: undefined;
  Details: undefined;
  Content: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParams>();

const TabNavigator: FC = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faHome} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={Details}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faBars} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Content"
      component={ContentNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faBreadSlice} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
