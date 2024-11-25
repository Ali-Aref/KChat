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

const fontSizes: Record<Sizes, TailwindClass> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl",
  "4xl": "text-5xl",
  "5xl": "text-6xl",
  "6xl": "text-6xl",
  "7xl": "text-6xl",
  "8xl": "text-6xl",
  "9xl": "text-6xl",
};
const fontSizeKeys = Object.keys(fontSizes);
const ff: "medium" | "large" | "small" = "medium"

const fontSizeMapper = (size: Sizes) => {
  const currentIndex = fontSizeKeys.indexOf(size);
  if (ff === "medium") {
    return fontSizes[size];
  } else if (ff == "large") {
    const nextIndex = Math.min(currentIndex + 1, fontSizeKeys.length - 1);
    return fontSizes[fontSizeKeys[nextIndex] as keyof typeof fontSizes];
  } else {
    const previousIndex = Math.max(currentIndex - 1, 0);
    return fontSizes[
      fontSizeKeys[previousIndex] as keyof typeof fontSizes
    ];
  }
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
        size && fontSizeMapper(size),
        className,
      )}
    >
      {children}
    </DefaultText>
  );
}
