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
      <Text size="xs">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="sm">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="md">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="lg">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="xl">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="2xl">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="3xl">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="4xl">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text size="5xl">{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
			<View style={{ height: 5}} />
			<Text>fontScale: {UnistylesRuntime.fontScale}</Text>
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
		fontSize: 20,
	},
}));
