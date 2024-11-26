import clsx from "clsx";
import React from "react";
import { View, ViewProps } from "react-native";

type BoxProps = ViewProps;

export function Box({ children, className }: BoxProps) {
	return (
		<View className={clsx("bg-light-bg dark:bg-dark-bg", className)}>
			{children}
		</View>
	);
}

export function HBox({ children, className }: BoxProps) {
	return (
		<Box className={clsx("flex-row w-full", className)}>
			{children}
		</Box>
	);
}

export function VBox({ children, className }: BoxProps) {
	return (
		<Box className={clsx("flex-1 flex-col", className)}>
			{children}
		</Box>
	);
}
