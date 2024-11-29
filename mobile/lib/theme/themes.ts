import { colors } from "./colors";

export const lightTheme = {
  colors: {
    typography: colors.slate["900"],
    background: colors.slate["200"],
		...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {
    Text: {
      deepKey: {
				color: colors.slate["900"],
			},
    },
  },
} as const;

export const darkTheme = {
  colors: {
    typography: colors.slate["200"],
    background: colors.slate["900"],
		...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {
    Text: {
      deepKey: {
				color: colors.slate["200"],
			},
    },
  },
} as const;
