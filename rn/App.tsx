import './lib/theme/unistyles';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {StatusBarStyle, UnistylesRuntime} from 'react-native-unistyles';
import RootStack from './routes/RootStack';
import {darkTheme, lightTheme} from './lib/theme/themes';

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

  return <RootStack />;
}
