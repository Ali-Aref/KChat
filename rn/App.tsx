import './lib/theme/unistyles';
import React from 'react';
import {Appearance, View, StatusBar, useColorScheme} from 'react-native';
import {
  StatusBarStyle,
  StyleSheet,
  UnistylesRuntime,
} from 'react-native-unistyles';
import {darkTheme, lightTheme} from './lib/theme/themes';
import Text from './components/ui/Text';
import Button from './components/ui/Button';
import Icon from 'react-native-vector-icons/Feather';
import gs from './lib/theme/global.style';
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
    <View style={[styles.container, gs.main]}>
      <Text>Colorschem: {UnistylesRuntime.colorScheme}</Text>
      <View style={[styles.main, gs.hide]}>
        <Button variant="primary" title="button" />
        <Button size="xs" variant="info" title="button" />
        <Button size="sm" variant="info" title="button" />
        <Button size="md" variant="info" title="button" />
        <Button size="lg" variant="info" title="button" />
        <Button size="xl" variant="primary" title="Login" icon={
					<Icon name="home" />
				} />
      </View>
      <View style={[styles.main, gs.hide]}>
        <Button size="md" variant="secondary" icon={<Icon name="home" />} title='Hola' />
        <Button variant="secondary" size="md" title="button" />
        <Button variant="primary" loading title="button" />
        <Button variant="secondary" icon={<Icon name="home" size={20} />} title="button" />
        <Button variant="primary" title="button" />
        <Button variant="secondary" title="button" disabled />
        <Button variant="info" title="button" />
        <Button variant="success" title="button" />
        <Button variant="warning" title="button" />
        <Button variant="error" title="button" />
      </View>
			<View style={[styles.main]}>
				<TextInput
					label="Username"
					variant="error"
					errorMessage="This field is required"
				/>
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
  hide: {display: 'none'},
  main: {
		width: "100%",
    gap: 10,
    marginTop: 10,
		//justifyContent: 'center',
		//alignItems: 'center',
  },
  icon: {
    color: theme.colors.typography,
  },
}));
