import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CountryPieChart, Text } from "../components";
import GoBack from "../components/go-back.component";
import { STYLES, COLORS } from "../styles/styles";

// interface ICountryInfo {
//   total_cases: string;
//   new_cases: string;
//   total_deaths: string;
//   new_deaths: string;
//   total_recovered: string;
//   active_cases: string;
//   serious_critical: string;
//   total_tests: string;
//   population: string;
// }

const DATA = {
  total_cases: 15546880,
  new_cases: 633137,
  total_deaths: 9450039,
  new_deaths: 5463687,
  total_recovered: 633137,
  active_cases: 9450039,
  serious_critical: 62009,
  total_tests: 150546880,
  population: 3550898212,
};

export function CountryInfo({ navigation, route }: any) {
  const { country } = route.params;

  // const Table = () => {
  //   return (
  //     <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
  //       <View style={{ flex: 1, alignSelf: "stretch" }}>a</View>
  //       <View style={{ flex: 1, alignSelf: "stretch" }}>b</View>
  //       <View style={{ flex: 1, alignSelf: "stretch" }}>c</View>
  //       <View style={{ flex: 1, alignSelf: "stretch" }}>d</View>
  //       <View style={{ flex: 1, alignSelf: "stretch" }}>e</View>
  //     </View>
  //   );
  // };
  // const data = [1, 2, 3, 4, 5];

  function formatNumber(num: number) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <>
      <View style={styles.container}>
        <GoBack style={styles.goBack} width="30px" onPress={() => navigation.navigate("Countries")} />
        <View style={styles.country}>
          <Text style={styles.title}>{country}</Text>
        </View>
        <CountryPieChart active_cases={DATA.active_cases} total_recovered={DATA.total_recovered} new_deaths={DATA.new_deaths} />
        <ScrollView>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Total Cases
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.total_cases)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                New Cases
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.new_cases)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Total Deaths
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.total_deaths)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                New Deaths
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.new_deaths)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Total Recovered
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.total_recovered)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Active Cases
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.active_cases)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Serious Critical
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.serious_critical)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Total Tests
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.total_tests)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text category="h4" style={styles.header}>
                Population
              </Text>
              <Text category="h4" style={styles.content}>
                {formatNumber(DATA.population)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...STYLES.layout,
  },
  country: {
    paddingTop: 50,
    alignItems: "center",
    paddingBottom: 15,
  },
  title: {
    color: COLORS.cloudBlue,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 2,
    borderBottomWidth: 3,
    borderColor: COLORS.cloudBlue,
  },
  info: {
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGray,
    paddingBottom: 1,
  },
  header: {
    color: COLORS.cloudBlue,
  },
  content: {
    color: "#808080",
  },
  goBack: {
    position: "absolute",
    top: 25,
    left: 10,
  },
});
