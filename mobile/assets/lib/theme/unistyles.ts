import { UnistylesRegistry } from "react-native-unistyles";
import { breakpoints, Breakpoints } from "./breakpoints";
import { lightTheme, darkTheme } from "./themes";

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends Breakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  }).addConfig({
		adaptiveThemes: true,
	})
