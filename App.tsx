import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";

const App: FC = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <RecoilRoot>
      <MainNavigator />
    </RecoilRoot>
  </NavigationContainer>
);

export default App;
