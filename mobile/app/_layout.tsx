import { darkTheme, lightTheme } from "@/theme/themes";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store"
import { StatusBar, useColorScheme } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import "@/utils/i18n"

export default function RootLayout() {
  const colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor(darkTheme.colors.background);
    NavigationBar.setBackgroundColorAsync(darkTheme.colors.background);
  } else {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor(lightTheme.colors.background);
    NavigationBar.setBackgroundColorAsync(lightTheme.colors.background);
  }

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="auth" />
      </Stack>
    </Provider>
  );
}
