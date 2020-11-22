import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TabNavigatorParams } from "../navigation/TabNavigator";
import { firstNameState, lastNameState } from "../store";
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
    StackNavigationProp<TabNavigatorParams, "Home">
  >();
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [lastName, setLastName] = useRecoilState(lastNameState);

  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput
        placeholder="First Name"
        style={styles.name}
        value={firstName}
        onChangeText={(value) => setFirstName(value)}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.name}
        value={lastName}
        onChangeText={(value) => setLastName(value)}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;
