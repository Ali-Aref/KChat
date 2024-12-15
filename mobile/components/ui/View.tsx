import React from "react";
import { View as RNView, ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function View({ style, ...props }: ViewProps) {
  return <RNView style={[styles.view, style]} {...props} />;
}

const styles = StyleSheet.create((theme) => ({
  view: {
    backgroundColor: theme.colors.background,
  },
}));
