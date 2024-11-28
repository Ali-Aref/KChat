import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../global.css";
import { Platform, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";
import * as NavigationBar from "expo-navigation-bar";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import { colors } from "@/constants/Colors";

if (__DEV__) {
  require("../ReactotronConfig");
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    setStatusBarStyle("light");
    setStatusBarBackgroundColor(colors.dark.bg);
    if (Platform.OS === "android") {
      NavigationBar.setButtonStyleAsync("light");
      NavigationBar.setBackgroundColorAsync(colors.dark.bg);
    }
  } else {
    setStatusBarStyle("dark");
    setStatusBarBackgroundColor(colors.light.bg);
    if (Platform.OS === "android") {
      NavigationBar.setButtonStyleAsync("dark");
      NavigationBar.setBackgroundColorAsync(colors.light.bg);
    }
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
