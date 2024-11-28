import { Stack } from "expo-router";
import { UnistylesProvider, UnistylesRuntime } from "react-native-unistyles";
import "@/lib/theme/unistyles";
import { useColorScheme } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
	const colorScheme = useColorScheme()

  return (
    <UnistylesProvider>
      <Stack />
    </UnistylesProvider>
  );
}
