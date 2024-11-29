import React from "react";
import { View, Text } from "react-native";
import { createStyleSheet, useStyles, UnistylesRuntime } from "react-native-unistyles";

const Index = () => {
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
			<Text style={styles.text}>{UnistylesRuntime.themeName} -- {UnistylesRuntime.colorScheme}</Text>
      <Text style={styles.text}>Unistyles example</Text>
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
    //color: theme.colors.typography,
  },
}));
