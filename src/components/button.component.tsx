import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { COLORS, FONTS } from "../styles/styles";

interface IButton {
  title: string;
  theme?: "default" | "light";
  size?: "small" | "normal" | "large";
  style?: any;
  styleText?: any;
  onPress?: () => void;
}

export function Button({ onPress, title, theme, size, style, styleText }: IButton) {
  let themeButtonStyle = {};
  let themeTextStyle = {};
  switch (theme) {
    case "light":
      themeButtonStyle = styles.themeLightButton;
      themeTextStyle = styles.themeLightText;
      break;
  }

  let sizeButtonStyle = {};
  let sizeTextStyle = {};
  switch (size) {
    case "small":
      sizeButtonStyle = styles.sizeSmallButton;
      sizeTextStyle = styles.sizeSmallText;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.defaultButton, themeButtonStyle, sizeButtonStyle, style]} activeOpacity={0.8}>
      <Text style={[styles.defaultText, themeTextStyle, sizeTextStyle, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: COLORS.red,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  defaultText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONTS.opensans700,
    textAlign: "center"
  },
  themeLightButton: {
    backgroundColor: COLORS.lightGray
  },
  themeLightText: {
    color: COLORS.darkGray
  },
  sizeSmallButton: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  sizeSmallText: {
    fontSize: 12
  }
});
