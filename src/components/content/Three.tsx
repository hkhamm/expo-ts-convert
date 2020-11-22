import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ContentNavigatorParams } from "../../navigation/ContentNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabNavigatorParams } from "../../navigation/TabNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Three: FC = () => {
  const navigation = useNavigation<
    CompositeNavigationProp<
      StackNavigationProp<ContentNavigatorParams, "Three">,
      BottomTabNavigationProp<TabNavigatorParams>
    >
  >();
  return (
    <View style={styles.container}>
      <Text>Hello Three!</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Three;
