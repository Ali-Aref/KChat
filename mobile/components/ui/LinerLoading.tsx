import React from "react";
import LottieView from "lottie-react-native";
import View from "./View";

export default function LinerLoading() {
	return <View />
  return (
    <LottieView
      autoPlay
      loop
      style={{
				width: 50,
				height: 50,
				backgroundColor: "white"
			}}
      source={require("@/assets/lottie/loading3.json")}
    />
  );
}
