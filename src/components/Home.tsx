import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { MainNavigatorParams } from "../navigation/MainNavigator";
import { nameState } from "../store";
import { useRecoilState } from "recoil";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    padding: 8,
  },
});

const Home: FC = () => {
  const navigation = useNavigation<
    StackNavigationProp<MainNavigatorParams, "Home">
  >();
  const [name, setName] = useRecoilState(nameState);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput
        style={styles.name}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;
