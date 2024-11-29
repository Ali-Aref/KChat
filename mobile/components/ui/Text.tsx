import React from "react";
import {
  View,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type TextProps = RNTextProps & {
  variant?: "info" | "success" | "warning" | "error";
};

export default function Text({
  children,
  style,
  variant,
  ...props
}: TextProps) {
  const { styles } = useStyles(stylesheet, {
    colors: variant,
  });

  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      colors: {
        info: { color: theme.colors.blue["500"] },
        warning: { color: theme.colors.orange["500"] },
        success: { color: theme.colors.green["500"] },
        error: { color: theme.colors.red["500"] },
        default: { color: theme.colors.typography },
      },
    },
  },
}));
