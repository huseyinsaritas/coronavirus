import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "../components/img/search-icon";
import { COLORS, FONTS } from "../styles/styles";

interface ISearchBar {
  value: string | number;
  onChangeText: ((text: string) => void) | undefined;
}

const SearchBar: React.FC<ISearchBar> = ({ value, onChangeText }: any) => {
  return (
    <View style={styles.searchBar}>
      <SearchIcon style={styles.searchIcon} width="18" />
      <TextInput style={styles.searchText} onChangeText={onChangeText} placeholder="Ara..." value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    borderRadius: 6,
    height: 36,
    overflow: "hidden",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchText: {
    width: "90%",
    // paddingVertical: 8,
    paddingLeft: 10,
    fontFamily: FONTS.opensans600,
    color: COLORS.darkGray,
    letterSpacing: 1,
  },
  searchIcon: {
    paddingTop: 10,
    paddingLeft: 5,
  },
});

export default SearchBar;
