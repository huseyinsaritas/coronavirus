import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../components";
import WorldChart from "../components/world-chart-component";
import { STYLES, COLORS } from "../styles/styles";

const DATA = {
  corona_virus_cases: "15,546,880",
  deaths: "633,137",
  recovered: "9,450,039",
  active_cases: "5,463,687",
};

export function Home({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <WorldChart />
      <View style={styles.row}>
        <Text style={styles.title}>Coronavirus Cases</Text>
        <Text style={styles.content}>{DATA.corona_virus_cases}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Deaths</Text>
        <Text style={styles.content}>{DATA.deaths}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Recovered</Text>
        <Text style={styles.content}>{DATA.recovered}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Active Cases</Text>
        <Text style={styles.content}>{DATA.active_cases}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...STYLES.layout,
    padding: 10,
    paddingTop: 30,
  },
  row: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    color: COLORS.cloudBlue,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
    paddingBottom: 15,
  },
  content: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: COLORS.cloudBlue,
    borderColor: COLORS.cloudBlue,
    padding: 3,
    width: "70%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
