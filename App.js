import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
export default function App() {
  const [assets] = useAssets([require("./pepe.jpeg")]);
  const [loaded] = useFonts(Ionicons.font); // 여러개 사용할 경우 object

  // Image.prefatch 사용 불가
  // 로딩함수에서 무언가를 작업할 수 없음

  // 오직 asset 만 불러온다면 hook 을 사용하는게 더 나을 것
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
