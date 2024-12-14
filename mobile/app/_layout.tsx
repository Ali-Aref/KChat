import { Stack } from "expo-router";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.contentStyle,
      }}
    >
      <Stack.Screen name="showcase" />
    </Stack>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  contentStyle: {
		paddingTop: rt.insets.top,
    backgroundColor: theme.colors.background,
  },
}));
