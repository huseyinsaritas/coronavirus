import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../scenes/home.scene";
import { Countries } from "../scenes/countries.scene";
import { Updates } from "../scenes/updates.scene";
import { Symptoms } from "../scenes/symptoms.scene";
import { CountryInfo } from "../scenes/country-info.component";

import { BottomTabs } from "../components";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

let initRoute = "BottomTabs";

const BottomNavList = [
  {
    title: "Cases",
    icon: "list",
  },
  {
    title: "Countries",
    icon: "map",
  },
  {
    title: "Latest News",
    icon: "chrome",
  },
  {
    title: "Symptoms",
    icon: "info",
  },
  {
    title: "Empty",
    icon: "star",
  },
];

const BottomTabsNavigation = () => (
  <BottomTab.Navigator initialRouteName="Home" tabBar={(props) => <BottomTabs {...props} list={BottomNavList} />}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Countries" component={Countries} />
    <BottomTab.Screen name="Updates" component={Updates} />
    <BottomTab.Screen name="Symptoms" component={Symptoms} />
  </BottomTab.Navigator>
);

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName={initRoute}>
      <Stack.Screen name="BottomTabs" children={BottomTabsNavigation} />
      <Stack.Screen name="CountryInfo" component={CountryInfo} />
    </Stack.Navigator>
  </NavigationContainer>
);
