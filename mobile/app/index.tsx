import React from "react";
import { View } from "react-native";
import Text from "@/components/ui/Text";
import {
  createStyleSheet,
  useStyles,
  UnistylesRuntime,
} from "react-native-unistyles";

const Index = () => {
  const { styles, theme } = useStyles(stylesheet);

  const toggleAdaptiveTheme = () => {
    const hasAdaptiveThemes = UnistylesRuntime.hasAdaptiveThemes;
    UnistylesRuntime.setAdaptiveThemes(!hasAdaptiveThemes);
  };
  const changeTheme = () => {
    UnistylesRuntime.setTheme("dark");
  };

  return (
    <View style={styles.container}>
			<Text>fontScale: {UnistylesRuntime.fontScale}</Text>
      <Text variant="info">
        {UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}
      </Text>
      <Text variant="warning">
        {UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}
      </Text>
      <Text variant="success">
        {UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}
      </Text>
      <Text variant="error">
        {UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}
      </Text>
      <Text>Unistyles example</Text>
    </View>
  );
};

export default Index;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    paddingTop: runtime.insets.top,
  },
	text: {
		fontWeight: "bold",
	},
}));
