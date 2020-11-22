import React, { useRef } from "react";
import { StyleSheet, Animated, View, TouchableOpacity } from "react-native";

import { COLORS } from "../styles/styles";
import { Text } from "./text.component";
import { Icon } from "./icon.component";

export function BottomTabs({ state, navigation, list }: any) {
  const animations = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  const animationFocus = (index: number) => {
    Animated.timing(animations[index], {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const animationBlur = (index: number) => {
    Animated.timing(animations[index], {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        if (isFocused) {
          animationFocus(index);
        } else {
          animationBlur(index);
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const styleTop = animations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0, -20],
        });
        const styleTextTop = animations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0, -16],
        });
        const styleDotTop = animations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [40, 8],
        });
        const styleOpacityReverse = animations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        });

        return (
          <TouchableOpacity key={index.toString()} accessibilityRole="button" accessibilityLabel={list[index].title} onPress={onPress} activeOpacity={1} style={styles.tabBar}>
            <View style={styles.tab}>
              <Animated.View style={[styles.icon, { transform: [{ translateY: styleTop }], opacity: styleOpacityReverse }]}>
                <Icon name={list[index].icon} size={18} color={COLORS.cloudBlue} />
              </Animated.View>

              <Animated.View style={[styles.titleContainer, { transform: [{ translateY: styleTextTop }] }]}>
                <Text category="c2" style={[styles.title, { color: COLORS.cloudBlue }]}>
                  {list[index].title}
                </Text>
              </Animated.View>

              <Animated.View style={[styles.dotContainer, { transform: [{ translateY: styleDotTop }], opacity: animations[index] }]}>
                <View style={styles.dot}></View>
              </Animated.View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: COLORS.white,
    // borderTopWidth: 1.5,
    // borderTopColor: COLORS.cloudBlue,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  tab: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {},
  titleContainer: {},
  title: {
    fontSize: 11,
    textAlign: "center",
  },
  dotContainer: {
    position: "absolute",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
    marginBottom: 2,
    backgroundColor: COLORS.cloudBlue,
  },
});
