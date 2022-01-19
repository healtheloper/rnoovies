import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled";
export default function App() {
  const [assets] = useAssets([require("./assets/pepe.jpeg")]);
  const [loaded] = useFonts(Ionicons.font); // 여러개 사용할 경우 object

  const isDark = useColorScheme() === "dark";

  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
