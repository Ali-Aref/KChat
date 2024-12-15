import React, { ReactElement, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";
import Text from "./Text";

export type ButtonProps = PressableProps &
  UnistylesVariants<typeof styles> & {
    title?: string;
    loading?: boolean;
    icon?: ReactElement;
    size?:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl";
    style?: ViewStyle | ViewStyle[];
  };

export default function Button({
  title,
  loading,
  icon,
  variant,
  style,
  ...props
}: ButtonProps) {
  styles.useVariants({
    variant,
    disabled: !!props.disabled,
  });
  // FIX: remove this state and use Pressable's state
  const [pressed, setPressed] = useState<boolean>(false);
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      // TODO: add buttonStyle prop here
      style={[
        styles.button(pressed, !!title),
        style as StyleProp<ViewStyle>,
      ]}
      {...props}
    >
      {loading ? <ActivityIndicator size="small" /> : icon ? icon : null}
      {title && (
        <Text>
          {title} - variant: {String(variant)}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  button: (pressed: boolean, title: boolean) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: theme.radius.md,
    borderWidth: pressed ? 1 : 2,
    paddingVertical: pressed ? 11 : 10,
    paddingHorizontal: (title ? 20 : 10) + (pressed ? 1 : 0),
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary500,
          borderColor: theme.colors.primary300,
        },
        secondary: {
          backgroundColor: theme.colors.secondary500,
          borderColor: theme.colors.secondary300,
        },
        info: {
          backgroundColor: theme.colors.blue400,
          borderColor: theme.colors.blue300,
        },
        success: {
          backgroundColor: theme.colors.emerald400,
          borderColor: theme.colors.emerald300,
        },
        warning: {
          backgroundColor: theme.colors.orange400,
          borderColor: theme.colors.orange300,
        },
        error: {
          backgroundColor: theme.colors.red400,
          borderColor: theme.colors.red300,
        },
				// ⚠️  UniStyle NEED FIX
				// if default variant is defined, other variants are not working
				// you can check this in loginButton at login.tsx line 44 change the button variant
        //default: {
        //  backgroundColor: theme.colors.blue["400"],
        //  borderColor: theme.colors.blue["300"],
        //},
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  }),
}));
