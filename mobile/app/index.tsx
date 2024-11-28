import React from "react";
import { View, Text } from "react-native";
import { createStyleSheet, useStyles, UnistylesRuntime } from "react-native-unistyles";

export const ExampleUnistyles = () => {
  const { styles } = useStyles(stylesheet);

	const toggleAdaptiveTheme = () => {
		const hasAdaptiveThemes = UnistylesRuntime.hasAdaptiveThemes
		UnistylesRuntime.setAdaptiveThemes(!hasAdaptiveThemes)
	}
	const changeTheme = () => {
		UnistylesRuntime.setTheme("dark")
	}


  return (
    <View style={styles.container}>
			<Text>{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text style={styles.text}>Unistyles example</Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
		paddingTop: runtime.insets.top,
  },
  text: {
    color: theme.colors.typography,
  },
}));
