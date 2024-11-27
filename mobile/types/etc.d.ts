import { ClassValue } from "clsx";

declare const __DEV__: boolean

export type TailwindClass = ClassValue;

export type Variants =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "destructive"
  | "primary"
  | "secondary";

export type Sizes =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
