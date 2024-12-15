import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';

export type TextProps = RNTextProps & UnistylesVariants<typeof styles> & {};

export default function Text({
  children,
  style,
  color,
  size,
  weight,
  ...props
}: TextProps) {
  styles.useVariants({
    color,
    size,
    weight,
  });

  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create(theme => ({
  text: {
    // remove when default vairants are supported
    fontSize: 16,
    color: theme.colors.typography,
    // ---
    variants: {
      color: {
        default: {color: theme.colors.typography},
				primary: {color: theme.colors.primary500},
        info: {color: theme.colors.blue500},
        warning: {color: theme.colors.orange500},
        success: {color: theme.colors.green500},
        error: {color: theme.colors.red700},
      },
      size: {
        default: {fontSize: theme.fs.default},
        xs: {fontSize: theme.fs.xs},
        sm: {fontSize: theme.fs.sm},
        md: {fontSize: theme.fs.md},
        lg: {fontSize: theme.fs.lg},
        xl: {fontSize: theme.fs.xl},
        '2xl': {fontSize: theme.fs['2xl']},
        '3xl': {fontSize: theme.fs['3xl']},
        '4xl': {fontSize: theme.fs['4xl']},
        '5xl': {fontSize: theme.fs['5xl']},
      },
      weight: {
        extrathin: {fontWeight: '200'},
        thin: {fontWeight: '300'},
        semibold: {fontWeight: '600'},
        bold: {fontWeight: '700'},
        extrabold: {fontWeight: '900'},
      },
    },
  },
}));


// TODO: fix these when default variants are supported
