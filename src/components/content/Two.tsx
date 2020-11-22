import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ContentNavigatorParams } from "../../navigation/ContentNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Two: FC = () => {
  const navigation = useNavigation<
    StackNavigationProp<ContentNavigatorParams, "Two">
  >();
  return (
    <View style={styles.container}>
      <Text>Hello Two!</Text>
      <Button title="Go to Two" onPress={() => navigation.navigate("Three")} />
    </View>
  );
};

export default Two;
