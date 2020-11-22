import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

export function Text({ children, category, style }: any) {
  let categoryStyle = {};
  switch (category) {
    case "h1":
      categoryStyle = styles.categoryH1;
      break;
    case "h2":
      categoryStyle = styles.categoryH2;
      break;
    case "h3":
      categoryStyle = styles.categoryH3;
      break;
    case "h4":
      categoryStyle = styles.categoryH4;
      break;
    case "h5":
      categoryStyle = styles.categoryH5;
      break;
    case "h6":
      categoryStyle = styles.categoryH6;
      break;
    case "p1":
      categoryStyle = styles.categoryP1;
      break;
    case "p2":
      categoryStyle = styles.categoryP2;
      break;
    case "c1":
      categoryStyle = styles.categoryC1;
      break;
    case "c2":
      categoryStyle = styles.categoryC2;
      break;
  }

  return <RNText style={[styles.default, categoryStyle, style]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  default: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontFamily: FONTS.opensans400
  },
  categoryH1: {
    fontSize: 28,
    fontFamily: FONTS.opensans800
  },
  categoryH2: {
    fontSize: 24,
    fontFamily: FONTS.opensans800
  },
  categoryH3: {
    fontSize: 20,
    fontFamily: FONTS.opensans800
  },
  categoryH4: {
    fontSize: 16,
    fontFamily: FONTS.opensans800
  },
  categoryH5: {
    fontSize: 14,
    fontFamily: FONTS.opensans700
  },
  categoryH6: {
    fontSize: 12,
    fontFamily: FONTS.opensans700
  },
  categoryP1: {
    fontSize: 15,
    fontFamily: FONTS.opensans300
  },
  categoryP2: {
    fontSize: 13,
    fontFamily: FONTS.opensans300
  },
  categoryC1: {
    fontSize: 15,
    fontFamily: FONTS.opensans400
  },
  categoryC2: {
    fontSize: 13,
    fontFamily: FONTS.opensans400
  }
});
