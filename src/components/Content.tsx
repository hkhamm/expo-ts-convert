import { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigatorParams } from "../navigation/TabNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Content: FC = () => {
  const route = useRoute<RouteProp<TabNavigatorParams, "Content">>();
  return (
    <View style={styles.container}>
      <Text>Hello React!</Text>
    </View>
  );
};

export default Content;
