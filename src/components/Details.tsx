import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { nameSelector } from "../store";

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
  const name = useRecoilValue(nameSelector);
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Details;
