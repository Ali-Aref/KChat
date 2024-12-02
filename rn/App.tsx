import './lib/theme/unistyles';
import React from 'react';
import {
  ScrollView,
  Appearance,
  View,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  StatusBarStyle,
  StyleSheet,
  UnistylesRuntime,
} from 'react-native-unistyles';
import {darkTheme, lightTheme} from './lib/theme/themes';
import Icon from 'react-native-vector-icons/Feather';
import Text from './components/ui/Text';
import TextInput from './components/ui/TextInput';

Appearance.setColorScheme(null);

export default function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  // setting statusbar
  if (colorScheme === 'light') {
    UnistylesRuntime.statusBar.setStyle(StatusBarStyle.Dark);
    StatusBar.setBackgroundColor(lightTheme.colors.background);
  } else {
    UnistylesRuntime.statusBar.setStyle(StatusBarStyle.Light);
    StatusBar.setBackgroundColor(darkTheme.colors.background);
  }

  return (
    <View style={styles.container}>
      <Text>Colorschem: {UnistylesRuntime.colorScheme}</Text>
      <View style={styles.main}>
        <TextInput
          label="Username"
          value="Hello"
          leftIcon={<Icon name="lock" size={20} style={styles.icon} />}
          rightIcon={<Icon name="eye" size={20} style={styles.icon} />}
        />
        <TextInput
          label="Username"
          value="Hello"
          leftIcon={<Icon name="lock" size={20} style={styles.icon} />}
          rightIcon={<Icon name="eye" size={20} style={styles.icon} />}
        />
        <TextInput label="Username" value="Hello" variant="info" />
        <TextInput label="Username" value="Hello" variant="success" />
        <TextInput label="Username" value="Hello" variant="warning" />
        <TextInput label="Username" value="Hello" variant="error" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: rt.insets.top,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  main: {
    gap: 10,
  },
	icon: {
		color: theme.colors.typography,
	},
}));
