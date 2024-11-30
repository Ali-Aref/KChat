import React from "react";
import { View } from "react-native";
import Text from "@/components/ui/Text";
import {
  createStyleSheet,
  useStyles,
  UnistylesRuntime,
} from "react-native-unistyles";
import TextInput from "@/components/ui/TextInput";

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
			<TextInput label="Username" value="Hello" />
			<TextInput label="Username" value="Hello" variant="info" />
			<TextInput label="Username" value="Hello" variant="success" />
			<TextInput label="Username" value="Hello" variant="warning" />
			<TextInput label="Username" value="Hello" variant="error" />
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
		paddingHorizontal: 20,
		gap: 10,
  },
	text: {
		fontSize: 20,
	},
}));
