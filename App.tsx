import React from "react";
import { SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";

import { AppNavigation } from "./src/navigations/app.navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
}
