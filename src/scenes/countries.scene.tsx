import React from "react";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../components";
import SearchBar from "../components/search-bar.component";
import { STYLES, COLORS } from "../styles/styles";
import countries from "./countries-data";

export function Countries({ navigation }: any) {
  const [search, setSearch] = useState<string>("");

  const onPress = (country: string) => {
    navigation.navigate("CountryInfo", { country });
  };

  const CountryItem = ({ countryName, navigation }: any) => {
    return (
      <View>
        <TouchableOpacity style={styles.row} onPress={() => onPress(countryName)}>
          <Text style={styles.title}>{countryName}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={(input) => setSearch(input)} />
      <ScrollView>
        {countries.map((country) => {
          return <CountryItem key={country.Slug} countryName={country.Country} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...STYLES.layout,
    paddingTop: 20,
  },
  row: {
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    color: COLORS.cloudBlue,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGray,
    padding: 5,
    width: "90%",
    // borderRadius: 5,
  },
});
