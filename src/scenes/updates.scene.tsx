import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../components";
import { STYLES, COLORS } from "../styles/styles";

const DATA = {
  corona_virus_cases: "15,546,880",
  deaths: "633,137",
  recovered: "9,450,039",
  active_cases: "5,463,687",
  closed_cases: "10,083,176"
};

export function Updates({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Updates</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...STYLES.layout
  },
  row: {
    padding: 10,
    paddingTop: 40
  },
  title: {
    color: COLORS.red,
    textAlign: "center",
    fontSize: 28,
    paddingTop: 40
  },
  content: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 32
  }
});
