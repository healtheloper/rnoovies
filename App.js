import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./pepe.jpeg"));
    await Image.prefetch(
      "https://images.chosun.com/resizer/u9nJRxs0BbtjygJ4HzKukecXnOk=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg"
    );
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
