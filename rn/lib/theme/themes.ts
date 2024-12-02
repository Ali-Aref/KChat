import {colors} from './colors';

export const lightTheme = {
  colors: {
    typography: colors.slate['900'],
    background: colors.slate['200'],
    ...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {
    textInput: {
      bg: colors.slate['300'],
			borderColor: colors.slate['400'],
    },
  },
} as const;

export const darkTheme = {
  colors: {
    typography: colors.slate['200'],
    background: colors.slate['900'],
    ...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  components: {
    textInput: {
      bg: colors.slate['800'],
			borderColor: colors.slate['700'],
    },
  },
} as const;
