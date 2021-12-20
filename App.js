import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadAssets = (assets) => assets.map((asset) => Asset.loadAsync(asset));
const loadImages = (images) => images.map((image) => Image.prefetch(image));

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const assets = loadAssets([require("./pepe.jpeg")]);
    const images = loadImages([
      "https://images.chosun.com/resizer/u9nJRxs0BbtjygJ4HzKukecXnOk=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg",
    ]);
    await Promise.all([...fonts, ...assets, ...images]);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.log}
      />
    );
  }
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
