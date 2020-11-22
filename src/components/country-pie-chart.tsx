import React from "react";
import { View, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Text } from "../components";
import { COLORS } from "../styles/styles";

interface ICountryPieChart {
  active_cases: number;
  total_recovered: number;
  new_deaths: number;
}

const CountryPieChart: React.FC<ICountryPieChart> = ({ active_cases, total_recovered, new_deaths }) => {
  const pieData = [
    {
      value: active_cases,
      svg: {
        fill: "#ffcc00",
      },
      key: `pie-1`,
    },
    {
      value: total_recovered,
      svg: {
        fill: "#e67300",
      },
      key: `pie-2`,
    },
    {
      value: new_deaths,
      svg: {
        fill: "#cc0066",
      },
      key: `pie-3`,
    },
  ];
  return (
    <View>
      <PieChart style={styles.pieChart} data={pieData} />
      <View style={styles.layout}>
        <View style={styles.row}>
          <View style={styles.activeCases} />
          <Text category="h6" style={styles.textColor}>
            Active Cases
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.newDeaths} />
          <Text category="h6" style={styles.textColor}>
            New Deaths
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.totalRecovered} />
          <Text category="h6" style={styles.textColor}>
            Total Recovered
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    position: "absolute",
    right: 15,
    top: "30%",
  },
  pieChart: {
    height: 200,
    width: "70%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    color: COLORS.red,
  },
  activeCases: {
    backgroundColor: "#ffcc00",
    width: 12,
    height: 12,
    borderRadius: 25,
    marginRight: 5,
  },
  totalRecovered: {
    backgroundColor: "#e67300",
    width: 12,
    height: 12,
    borderRadius: 25,
    marginRight: 5,
  },
  newDeaths: {
    backgroundColor: "#cc0066",
    width: 12,
    height: 12,
    borderRadius: 25,
    marginRight: 5,
  },
  textColor: {
    color: "#808080",
  },
});
export default CountryPieChart;
