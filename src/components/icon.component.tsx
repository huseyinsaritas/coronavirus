import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { COLORS, FONTS } from "../styles/styles";

export function Icon({ name, size, color, style }: any) {
  if (!size) size = 24;
  if (!color) color = COLORS.white;

  return <Feather name={name} size={size} color={color} style={style}></Feather>;
}

const styles = StyleSheet.create({
  default: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.opensans400,
  },
});
