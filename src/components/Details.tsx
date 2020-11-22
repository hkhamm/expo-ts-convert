import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { fullNameState } from "../store";

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

const Details: FC = () => {
  const name = useRecoilValue(fullNameState);
  return (
    <View style={styles.container}>
      <Text>Your name</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Details;
