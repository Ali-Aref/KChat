import { Stack } from "expo-router";
import {
  UnistylesProvider,
  UnistylesRuntime,
  useStyles,
} from "react-native-unistyles";
import "@/lib/theme/unistyles";
import * as NavigationBar from "expo-navigation-bar";

export default function RootLayout() {
  const { theme } = useStyles();

  UnistylesRuntime.statusBar.setColor(theme.colors.background);
  UnistylesRuntime.navigationBar.setColor(theme.colors.background);
  NavigationBar.setButtonStyleAsync(
    UnistylesRuntime.colorScheme === "dark" ? "light" : "dark",
  );
  //StatusBar.setBarStyle(colorScheme === "dark" ? "light-content" : "dark-content")

  return (
    <UnistylesProvider>
      <Stack />
    </UnistylesProvider>
  );
}
