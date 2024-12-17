import { darkTheme, lightTheme } from "@/theme/themes";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import * as NavigationBar from "expo-navigation-bar"

export default function RootLayout() {
	const colorScheme = useColorScheme()

	if (colorScheme === "dark"){
		StatusBar.setBarStyle("light-content")
		StatusBar.setBackgroundColor(darkTheme.colors.background)
		NavigationBar.setBackgroundColorAsync(darkTheme.colors.background)
	} else {
		StatusBar.setBarStyle("dark-content")
		StatusBar.setBackgroundColor(lightTheme.colors.background)
		NavigationBar.setBackgroundColorAsync(lightTheme.colors.background)
	}

  return (
    <Stack screenOptions={{
			headerShown: false,
		}}>
    </Stack>
  );
}
