import {StyleSheet} from 'react-native-unistyles';
import {lightTheme, darkTheme} from './themes';
import {breakpoints, Breakpoints} from './breakpoints';

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};
const appThemes: AppThemes = {
  light: lightTheme,
  dark: darkTheme,
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends Breakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});
