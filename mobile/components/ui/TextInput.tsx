import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Text from "./Text";

type TextInputProps = RNTextInputProps & {
  variant?: "info" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  label?: string;
};

export default function TextInput({
  style,
  variant,
  size,
  label,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const [focused, setFocused] = useState<boolean>(false);
  const { styles } = useStyles(stylesheet, {
    size,
    variant,
  });

  return (
    <View style={styles.container}>
      {label && <Text size={size}>{label}</Text>}
      <RNTextInput
        style={[styles.input(focused), style]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 2,
    width: "100%",
    overflow: "hidden",
    //backgroundColor: theme.colors.sky["100"],
  },
  input: (focused: boolean) => ({
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: focused ? 1 : 0.5,
    backgroundColor: theme.colors.sky["200"],
    variants: {
      variant: {
        default: {
          color: theme.colors.typography,
          backgroundColor: theme.colors.inputBg,
          borderColor: theme.colors.typography,
        },
        info: {
          color: theme.colors.blue["700"],
          backgroundColor: theme.colors.blue["200"],
          borderColor: theme.colors.blue["700"],
        },
        success: {
          color: theme.colors.green["700"],
          backgroundColor: theme.colors.green["200"],
          borderColor: theme.colors.green["700"],
        },
        warning: {
          color: theme.colors.orange["700"],
          backgroundColor: theme.colors.orange["200"],
          borderColor: theme.colors.orange["700"],
        },
        error: {
          color: theme.colors.red["700"],
          backgroundColor: theme.colors.red["200"],
          borderColor: theme.colors.red["700"],
        },
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
    },
  }),
}));
