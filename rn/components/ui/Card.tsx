import React from 'react';
import {View, ViewProps} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import Text, {TextProps} from './Text';

type CardProps = ViewProps & {
  rounded?: boolean;
};
type CardTitleProps = TextProps & {};
type CardFooterProps = ViewProps & {row?: boolean};

export default function Card({
  children,
  rounded,
  style = {},
  ...props
}: CardProps) {
  styles.useVariants({
    rounded,
  });

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

export function CardTitle({children, style, ...props}: CardTitleProps) {
  return (
    <Text style={[styles.cardTitle, style]} weight="bold" {...props}>
      {children}
    </Text>
  );
}

export function CardFooter({
  children,
  style,
  row,
  ...props
}: CardFooterProps) {
  return (
    <View style={[styles.cardFooter(row), style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  card: {
    padding: theme.p.md,
    backgroundColor: theme.colors.cardBackground,
    variants: {
      rounded: {
        true: {borderRadius: theme.radius.md},
      },
    },
  },
  cardTitle: {
    paddingBottom: theme.p.sm,
  },
  cardFooter: (row?: boolean) => ({
    //backgroundColor: theme.colors.teal['400'],
    marginTop: theme.m.sm,
    flexDirection: row ? 'row' : 'column',
		alignItems: 'center',
		//  justifyContent: 'space-between',
  }),
}));
