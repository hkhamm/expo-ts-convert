import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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

const One: FC = () => {
  const navigation = useNavigation<
    StackNavigationProp<ContentNavigatorParams, "One">
  >();
  return (
    <View style={styles.container}>
      <Text>Hello One!</Text>
      <Button title="Go to Two" onPress={() => navigation.navigate("Two")} />
    </View>
  );
};

export default One;
