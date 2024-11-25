import React from "react";
import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
} from "react-native";
import { Sizes, TailwindClass, Variants } from "@/lib/types/etc";
import clsx from "clsx";

type TextProps = DefaultTextProps & {
  className?: TailwindClass;
  variant?: keyof typeof variantStyles;
  size?: Sizes;
};

const variantStyles: Record<Variants, TailwindClass> = {
  default: "text-gray-800 dark:text-gray-300",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
  primary: "text-primary",
  secondary: "text-secondary",
};

const sizes: Record<Sizes, TailwindClass> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

export default function Text({
  className,
  variant,
  size,
  children,
  ...props
}: TextProps) {
  return (
    <DefaultText
      {...props}
      className={clsx(
        variant ? variantStyles[variant] : variantStyles.default,
        size ? sizes[size] : sizes.base,
        className,
				// NOTE: start from here
				"text-xl", // test here
      )}
    >
      {children}
    </DefaultText>
  );
}
