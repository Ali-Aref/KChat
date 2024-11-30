import { colors } from "./colors";

export const lightTheme = {
  colors: {
    typography: colors.slate["900"],
    background: colors.slate["200"],
		inputBg: colors.slate["300"],
		...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {},
} as const;

export const darkTheme = {
  colors: {
    typography: colors.slate["200"],
    background: colors.slate["900"],
		inputBg: colors.slate["700"],
		...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {},
} as const;
