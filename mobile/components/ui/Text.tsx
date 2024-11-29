import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type TextProps = RNTextProps & {
  color?: "info" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "extrathin" | "thin" | "semibold" | "bold" | "extrabold";
};

export default function Text({
  children,
  style,
  color,
  size,
  weight,
  ...props
}: TextProps) {
  const { styles } = useStyles(stylesheet, {
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

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      color: {
        info: { color: theme.colors.blue["500"] },
        warning: { color: theme.colors.orange["500"] },
        success: { color: theme.colors.green["500"] },
        error: { color: theme.colors.red["500"] },
        default: { color: theme.colors.typography },
      },
      size: {
        default: { fontSize: 16 },
        xs: { fontSize: 12 },
        sm: { fontSize: 14 },
        md: { fontSize: 16 },
        lg: { fontSize: 18 },
        xl: { fontSize: 20 },
        "2xl": { fontSize: 22 },
        "3xl": { fontSize: 24 },
        "4xl": { fontSize: 26 },
        "5xl": { fontSize: 28 },
      },
      weight: {
				extrathin: { fontWeight: "100" },
				thin: { fontWeight: "300" },
        semibold: { fontWeight: "600" },
        bold: { fontWeight: "700" },
        extrabold: { fontWeight: "900" },
      },
    },
  },
}));
