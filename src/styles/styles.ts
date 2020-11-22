export const COLORS = {
  red: "#EC1830",
  white: "#fff",
  black: "#000",
  darkGray: "#222",
  lightGray: "#eee",
  creamLight: "#fffcf2",
  creamDark: "#fff5db",
  millionGray: "#999",
  midnightGray: "#444",
  cloudBlue: "#29a3a3",
  // cloudBlue: "#0195FF",
  // duyguBlue:'#5cd6d6',
  palePurple: "#CE85FF",
  mediumPurple: "#BD5CFF",
  darkPurple: "992BE3",
};

export const FONTS = {
  opensans300: "OpenSans_300Light",
  opensans400: "OpenSans_400Regular",
  opensans600: "OpenSans_600SemiBold",
  opensans700: "OpenSans_700Bold",
  opensans800: "OpenSans_800ExtraBold",
};

export const VARS = {
  darkBackground: COLORS.darkGray,
  lightBackground: COLORS.white,
};

export const STYLES = {
  layout: {
    flex: 1,
    backgroundColor: VARS.lightBackground,
  },
  cardLight: {
    backgroundColor: COLORS.creamLight,
    borderRadius: 4,
    shadowColor: COLORS.darkGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  shadowDark: {
    shadowColor: COLORS.darkGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  shadowLight: {
    shadowColor: COLORS.darkGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
};
