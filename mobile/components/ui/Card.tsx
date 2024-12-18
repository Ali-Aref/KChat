import React from "react";
import { View, ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import Text, { TextProps } from "./Text";

type CardProps = ViewProps & {};
type CardTitleProops = TextProps & {};

export default function Card({ children, style, ...props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

export function CardTitle({ children, style, ...props }: CardTitleProops) {
  return (
    <Text weight="bold" style={style} {...props}>
      {children}
    </Text>
  );
}

export function CardSection({ children, style, ...props }: CardProps) {
  return (
    <View style={[styles.cardSection, style]} {...props}>
      {children}
    </View>
  );
}

export function CardActions({ children, style, ...props }: CardProps) {
  return (
    <CardSection style={[styles.cardActions, style]} {...props}>
      {children}
    </CardSection>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    padding: theme.p.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.cardBackground,
  },
	cardSection: {
		marginTop: theme.m.md,
	},
	cardActions: {
    marginBottom: -theme.m.md,
    marginHorizontal: -theme.m.md,
	},
}));
