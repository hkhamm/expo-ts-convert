import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";

const App: FC = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <RecoilRoot>
      <TabNavigator />
    </RecoilRoot>
  </NavigationContainer>
);

export default App;
