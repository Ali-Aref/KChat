import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';

type TextProps = RNTextProps & UnistylesVariants<typeof styles> & {};

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
        info: {color: theme.colors.blue['500']},
        warning: {color: theme.colors.orange['500']},
        success: {color: theme.colors.green['500']},
        error: {color: theme.colors.red['700']},
      },
      size: {
        default: {fontSize: 16},
        xs: {fontSize: 12},
        sm: {fontSize: 14},
        md: {fontSize: 16},
        lg: {fontSize: 18},
        xl: {fontSize: 20},
        '2xl': {fontSize: 22},
        '3xl': {fontSize: 24},
        '4xl': {fontSize: 26},
        '5xl': {fontSize: 28},
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
