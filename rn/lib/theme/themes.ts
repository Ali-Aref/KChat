import {colors} from './colors';

const shared = {
  fs: {
    default: 16,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 22,
    '3xl': 24,
    '4xl': 26,
    '5xl': 28,
  },
	p: {
		default: 10,
		xs: 5,
		sm: 8,
		md: 10,
		lg: 12,
		xl: 14,
		'2xl': 16,
		'3xl': 18,
		'4xl': 20,
		'5xl': 22,
	},
	m: {
		default: 10,
		xs: 5,
		sm: 8,
		md: 10,
		lg: 12,
		xl: 14,
		'2xl': 16,
		'3xl': 18,
		'4xl': 20,
		'5xl': 22,
	},
	radius: {
		default: 6,
		xs: 2,
		sm: 4,
		md: 6,
		lg: 8,
		xl: 10,
		'2xl': 14,
		'3xl': 16,
		'4xl': 20,
		'5xl': 24,
	},
} as const;

export const lightTheme = {
  colors: {
    typography: colors.slate['900'],
    background: colors.slate['200'],
		cardBackground: colors.slate['100'],
    ...colors,
  },
  ...shared,
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
    background: colors.slate['800'],
		cardBackground: colors.slate['700'],
    ...colors,
  },
  ...shared,
  components: {
    textInput: {
      bg: colors.slate['500'],
      borderColor: colors.slate['400'],
    },
  },
} as const;
